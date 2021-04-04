import s from './SingleNewQuestion.module.css';
import {Field} from "react-final-form";
import React from "react";
import TextareaAutosize from 'react-textarea-autosize';
import {SingleAnswer} from "./SingleAnswer";
import trash from './../../../images/trash.svg';
import {FieldArray} from "react-final-form-arrays";

export const SingleNewQuestion = ({name, index, fields, mutator}) => {


    return (
        <div>
            <div className={s.questionWrapper}>
                <div className={s.header}>
                    <h5 className={s.qid}>№: {index + 1}</h5>
                    <img
                        className={s.trash}
                        src={trash} alt={''}
                        onClick={() => fields.remove(index)}
                    />
                </div>
                <div className={s.item}>

                    <label>Вопрос</label>
                    <Field name={`${name}.question`}>
                        {props => (
                            <div>
                                <TextareaAutosize
                                    className={s.question}
                                    name={props.input.name}
                                    value={props.input.value}
                                    onChange={props.input.onChange}
                                    placeholder={'Enter question'}
                                />
                                <div className={s.answersBlock}>
                                    <label>Ответы</label>
                                    <FieldArray name={`${name}.answers`}>
                                        {({fields}) =>
                                            fields.map((name, index) => (
                                                <div key={name}>
                                                    <SingleAnswer
                                                        name={name}
                                                        fields={fields}
                                                        index={index}
                                                    />
                                                </div>
                                            ))
                                        }
                                    </FieldArray>
                                </div>
                                <div className={s.addAnswerWrapper}>
                                    <button
                                        className={s.button}
                                        type="button"
                                        onClick={() => mutator(`${name}.answers`, undefined)}
                                    >
                                        Add answer
                                    </button>
                                </div>
                            </div>
                        )}
                    </Field>
                </div>

            </div>
        </div>
    )
}