import React from "react";
import s from "./SingleNewQuestion.module.css";
import {Field} from "react-final-form";
import TextareaAutosize from 'react-textarea-autosize';

export const SingleAnswer = ({fields, index, name}) => {

    return <div className={s.answerItem}>
        <Field name={`${name}.answer`}>
            {props => (
                <TextareaAutosize
                    className={s.question}
                    {...props.input}
                    placeholder={'Введите ответ'}
                />
            )}
        </Field>

        <Field
            type={'checkbox'}
            name={`${name}.isCorrect`}
        >{props => (
                <label className={s.switch}>
                    <input {...props.input}/>
                    />
                    <span className={`${s.slider} ${s.round}`}/>
                </label>

            )}
        </Field>



        <span
            onClick={() => fields.remove(index)}
            style={{cursor: 'pointer'}}
        >❌</span>
    </div>
}
