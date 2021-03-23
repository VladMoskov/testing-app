import s from '../AddTest.module.css';
import {Field, Form} from "react-final-form";
import {postNewTest} from "../../../Redux/tests-reducer";
import React from "react";
import {useDispatch} from "react-redux";

const OneQuestionForm = () => {

    const dispatch = useDispatch();

    let onSubmit = (formData) => {
        dispatch(postNewTest(formData));
        console.log(formData);
    }

    return (
        <div>
            <div className={s.wrapper}>
                <Form onSubmit={onSubmit}>
                    {props => (
                        <form onSubmit={props.handleSubmit}>
                            <label>first question</label>
                            <div>
                                <Field name='name' component='textarea'/>
                                <Field name='description' component='textarea'/>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    )}
                </Form>
            </div>
        </div>
    )
}

export default OneQuestionForm;