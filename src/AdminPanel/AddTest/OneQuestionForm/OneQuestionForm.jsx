import s from '../AddTest.module.css';
import {Field, Form} from "react-final-form";
import {postNewTest} from "../../../Redux/tests-reducer";
import React from "react";
import {useDispatch} from "react-redux";
import {SingleNewQuestion} from "./SingleNewQuestion";
import {FieldArray} from "react-final-form-arrays";
import arrayMutators from 'final-form-arrays'

export const OneQuestionForm = () => {

    const dispatch = useDispatch();

    let onSubmit = (formData) => {
        dispatch(postNewTest(formData));
        console.log(formData);
    }

    return (
        <div>
            <div className={s.wrapper}>
                <Form
                    onSubmit={onSubmit}
                    mutators={{
                        ...arrayMutators
                    }}
                    render={({
                                 handleSubmit,
                                 form: {
                                     mutators: {push}
                                 },
                                 pristine,
                                 submitting,
                             }) => {
                        return (
                            <form onSubmit={handleSubmit}>
                                <div className={s.topBlock}>
                                    <div className={s.item}>
                                        <label>Name</label>
                                        <Field
                                            className={s.nameField}
                                            name='name'
                                            component='input'
                                            placeholder={'Enter test name (required)'}
                                        />
                                    </div>
                                    <div className={s.item}>
                                        <label>Description</label>
                                        <Field
                                            className={s.descriptionField}
                                            name='description'
                                            component='textarea'
                                            placeholder={'Enter test description'}
                                        />
                                    </div>
                                </div>

                                <FieldArray name="questions">
                                    {({fields}) =>
                                        fields.map((name, index) => (
                                            <div key={name}>
                                                <SingleNewQuestion
                                                    name={name}
                                                    index={index}
                                                    fields={fields}
                                                    mutator={push}
                                                />

                                            </div>
                                        ))
                                    }
                                </FieldArray>
                                <div className={s.addWrapper}>
                                    <button
                                        className={s.addButton}
                                        type="button"
                                        onClick={() => push('questions', undefined)}
                                    >
                                        Add question
                                    </button>
                                </div>
                                <button
                                    className={s.saveButton}
                                    type="submit"
                                    disabled={submitting || pristine}
                                >
                                    Save Test
                                </button>
                            </form>
                        )
                    }}
                />
            </div>
        </div>
    )
}

