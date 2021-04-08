import React, {useEffect} from 'react';
import {Field, Form} from "react-final-form";
import {useDispatch, useSelector} from "react-redux";
import {TestsPage} from "../Tests/TestsPage";
import {usersThunks} from "../../BLL/Creators/ThunkCreators";

export const LoginPage = () => {

    const isAuth = useSelector(state => state.authUser.isAuth)
    const dispatch = useDispatch();
    const users = useSelector(state => state.usersPage.users)

    const onSubmit = (formData) => {
        users.forEach(user => {
            if (user.email === formData.email) {
                if (user.password === formData.password){
                    dispatch(usersThunks.postAuthUser(user))
                } else {alert('incorrect password')}
            } else {alert('incorrect email')}
        })
    }

    useEffect(()=> {
        dispatch(usersThunks.getUsers())
    },[isAuth, dispatch])

    return !isAuth ?
        <div>
            <Form
                onSubmit={onSubmit}
                render={({handleSubmit}) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <label>email</label>
                            <Field
                                name={'email'}
                                component={'input'}
                                placeholder={'email'}
                            />
                            <label>password</label>
                            <Field
                                name={'password'}
                                component={'input'}
                                type={'current-password'}
                                placeholder={'password'}
                            />
                            <button type={'submit'}>login In</button>
                        </form>
                    )
                }}/>
        </div>

        : <TestsPage/>
}