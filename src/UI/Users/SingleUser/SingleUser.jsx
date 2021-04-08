import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {usersThunks} from "../../../BLL/Creators/ThunkCreators";
import {usersActions} from "../../../BLL/Creators/ActionCreators";
import s from './SingleUser.module.css';
import avatar from './../../../img/profileImage.png'
import {ItemsTable} from "../../common/ItemsTable";
import {ResultItem} from "./ResultItem";

export const SingleUser = ({userId}) => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.singleUser.user)
    console.log(user)

    useEffect(() => {
        dispatch(usersThunks.getUser(userId));
        return () => dispatch(usersActions.setIsFetchingUser(true));
    }, [dispatch, userId])

    return <div className={s.wrapper}>
        <div className={s.info}>
            <div className={s.avatar}>
                <img src={user.img || avatar} alt={''}/>
            </div>
            <div className={s.about}>
                <h1>{user.name} {user.lastName}</h1>
                <h2><span>Должность: </span>{user.role}</h2>
                <h2><span>День рождения: </span>{user.birthDay || 'n/a'}</h2>
                <h2><span>Номер телефона: </span>{user.phoneNumber || 'n/a'}</h2>
                <h2><span>Код: </span>{user.code || 'n/a'}</h2>
            </div>
            <h6>id: {user.id}</h6>
        </div>
        <div className={s.finishedBlock}>
            <h3>ПРОЙДЕНЫЕ ТЕСТЫ</h3>
            {user.finishedTests
                && <ItemsTable
                    itemComponent={ResultItem}
                    array={user.finishedTests.map(f => f.test)}
            />}
        </div>
    </div>
}