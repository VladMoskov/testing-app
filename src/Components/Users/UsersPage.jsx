import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../common/Preloader";
import {ItemsTable} from "../common/ItemsTable";
import {UserItem} from "./UserItem/UserItem";
import {Button} from "../common/Button";
import {Link} from "react-router-dom";
import {usersThunks} from "../../BLL/Creators/ThunkCreators";

export const UsersPage = () => {

    const dispatch = useDispatch();
    const usersPage = useSelector(state => state.usersPage)

    useEffect(()=> {
        dispatch(usersThunks.getUsers());
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