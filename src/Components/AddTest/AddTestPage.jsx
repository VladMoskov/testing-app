import s from './AddTest.module.css';
import {Field, Form} from "react-final-form";
import React from "react";
import {useDispatch} from "react-redux";
import {SingleNewQuestion} from "./SingleNewQuestion";
import {FieldArray} from "react-final-form-arrays";
import arrayMutators from 'final-form-arrays'
import {Button} from "../common/Button";
import {testThunks} from "../../BLL/Creators/ThunkCreators";

export const AddTestPage = () => {

    const dispatch = useDispatch();

    let onSubmit = (formData) => {
        dispatch(testThunks.postNewTest(formData));
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
                                 }
                             }) => {
                        return (
                            <form onSubmit={handleSubmit}>
                                <div className={s.topBlock}>
                                    <div className={s.item}>
                                        <label>Название</label>
                                        <Field
                                            className={s.nameField}
                                            name='name'
                                            component='input'
                                            placeholder={'Введите название теста'}
                                        />
                                    </div>
                                    <div className={s.item}>
                                        <label>Описание</label>
                                        <Field
                                            className={s.descriptionField}
                                            name='description'
                                            component='textarea'
                                            placeholder={'Введите описание'}
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
                                    <Button
                                        text={'Добавить вопрос'}
                                        type="button"
                                        onClick={() => push('questions', undefined)}
                                    />
                                </div>
                                <Button
                                    text={'Сохранить'}
                                    type="submit"
                                />
                            </form>
                        )
                    }}
                />
            </div>
        </div>
    )
}

