import React from 'react';
import s from './AddTest.module.css';
import OneQuestionForm from "./OneQuestionForm/OneQuestionForm";

const AddTest = (props) => {
    return (
        <div>
            <div className={s.wrapper}>
                <OneQuestionForm/>
            </div>
        </div>
    )
}

export default AddTest;