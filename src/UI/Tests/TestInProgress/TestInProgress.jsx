import React, {useState} from 'react';
import s from './TestInProgress.module.css';
import {Field, Form} from "react-final-form";
import {FieldArray} from "react-final-form-arrays";
import arrayMutators from "final-form-arrays";
import {Result} from "./Result";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "../../common/Button";
import {testActions as actionCreators} from "../../../BLL/Creators/ActionCreators";
import {usersThunks} from "../../../BLL/Creators/ThunkCreators";

export const TestInProgress = ({test, authUserData}) => {

    const dispatch = useDispatch();
    const [isDisabled, setIsDisabled] = useState(true)
    const [counter, setCounter] = useState(0);
    const initialArray = [];
    const fData = useSelector(state => state.progressPage.result)

    if (test.questions[counter]) test.questions[counter].answers.map((_, index) => initialArray[index] = false)

    const onSubmit = (formData) => {
        dispatch(actionCreators.setResult(formData));
    }

    const submitResult = () => {
        dispatch(usersThunks.updateUser(authUserData.id, {
            finishedTests: [
                ...authUserData.finishedTests,
                {
                    id: test.id,
                    result: fData,
                    test: test
                }
            ]
        }))
    }

    return <div className={s.body}>
        {test.questions[counter]
            ? <div>
                <div className={s.questionWrapper}>
                    <h1>{test.questions[counter].question}</h1>

                    <Form
                        mutators={{
                            ...arrayMutators
                        }}
                        onSubmit={onSubmit}
                        render={({handleSubmit}) => {
                            return (
                                <form onSubmit={handleSubmit}>
                                    <div className={s.answersWrapper}>
                                        <div className={s.leftAnswers}>
                                            <FieldArray
                                                initialValue={initialArray}
                                                name={`${test.questions[counter].question}.answers`}
                                            >
                                                {({fields}) =>
                                                    fields.map((name, index) => (
                                                        <div key={name}>
                                                            <Field type={'checkbox'} name={`${name}`}>
                                                                {props =>
                                                                    <div>
                                                                        <input className={s.question} {...props.input}/>
                                                                    </div>
                                                                }
                                                            </Field>
                                                        </div>
                                                    ))
                                                }
                                            </FieldArray>
                                        </div>
                                        <div className={s.rightAnswers}>
                                            {test.questions[counter].answers.map(a => (
                                                <div className={`${s.question} ${s.questionString}`} key={a.answer}>
                                                    <h2>{a.answer}</h2>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <Button
                                        text={'Ответить'}
                                        type={'submit'}
                                        onClick={()=> setIsDisabled(false)}
                                    />
                                </form>
                            )
                        }}
                    />

                </div>
                <div className={s.nextContainer}>
                    <Button
                        disabled={isDisabled}
                        text={'Следующий вопрос'}
                        onClick={() => {
                            if (!isDisabled) {
                                setCounter(counter + 1)
                                setIsDisabled(true)
                            }
                            if (test.questions.length === counter + 1){
                                submitResult()
                            }
                        }}
                    />
                </div>
            </div>
            : <Result test={test}/>
        }
    </div>
}

