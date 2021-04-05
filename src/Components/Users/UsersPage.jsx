import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../BLL/Reducers/users/users-reducer";
import Preloader from "../common/Preloader";
import {ItemsTable} from "../common/ItemsTable";
import {UserItem} from "./UserItem/UserItem";
import {Button} from "../common/Button";
import {Link} from "react-router-dom";

export const UsersPage = () => {

    const dispatch = useDispatch();
    const usersPage = useSelector(state => state.usersPage)

    useEffect(()=> {
        dispatch(getUsers());
    },[dispatch])

    if (usersPage.isFetching){
        return <Preloader />
    } else {
        return <ItemsTable array={usersPage.users} itemComponent={UserItem}>

            <Link to={'/add-user'}>
                <Button text={'Добавить пользователя'}/>
            </Link>

        </ItemsTable>
    }
}