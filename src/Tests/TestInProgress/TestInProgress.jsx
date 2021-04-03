import React, {useState} from 'react';
import s from './TestInProgress.module.css';
import {Field, Form} from "react-final-form";
import {FieldArray} from "react-final-form-arrays";
import arrayMutators from "final-form-arrays";
import {Result} from "./Result";
import {setResult} from "../../Redux/test-progress-reducer";
import {useDispatch} from "react-redux";

export const TestInProgress = ({test}) => {

    const dispatch = useDispatch();
    const [counter, setCounter] = useState(0);
    const initialArray = []

    if (test.questions[counter]) test.questions[counter].answers.map((_, index)=>initialArray[index]=false)

    const onSubmit = (formData) => {
        dispatch(setResult(formData))
    }

    return <div className={s.body}>
        {test.questions[counter]
            ? <div>
                <h1>{test.questions[counter].question}</h1>

                <Form
                    mutators={{
                        ...arrayMutators
                    }}
                    onSubmit={onSubmit}
                    render={({handleSubmit}) => {
                        return (
                            <form onSubmit={handleSubmit}>

                                <FieldArray
                                    initialValue={initialArray}
                                    name={`${test.questions[counter].question}.answers`}
                                >
                                    {({fields}) =>
                                        fields.map(name => (
                                            <div key={name}>
                                                <Field type={'checkbox'} name={`${name}.answer`} value={false}>
                                                    {props =>
                                                        <div>
                                                            <input {...props.input}/>
                                                        </div>
                                                    }
                                                </Field>
                                            </div>
                                        ))
                                    }
                                </FieldArray>

                                {test.questions[counter].answers.map((a, i) => (
                                    <div key={i}>
                                        <h4>{i + 1} {a.answer}</h4>
                                    </div>
                                ))}
                                <button type={'submit'}>submit</button>
                            </form>
                        )
                    }}
                />
                <button
                    onClick={() => setCounter(counter + 1)}
                >
                    next
                </button>
            </div>
            : <Result test={test}/>
        }
    </div>
}

