import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../common/Preloader";
import {ItemsTable} from "../common/ItemsTable";
import {UserItem} from "./UserItem";
import {usersThunks} from "../../BLL/Creators/ThunkCreators";
import {useParams} from 'react-router-dom';
import {SingleUser} from "./SingleUser/SingleUser";
import {usersActions} from "../../BLL/Creators/ActionCreators";

export const UsersPage = () => {

    const userId = useParams().userId
    const dispatch = useDispatch();
    const usersPage = useSelector(state => state.usersPage)

    useEffect(()=> {
        dispatch(usersThunks.getUsers());
        return () => dispatch(usersActions.setIsFetchingUsers(true));
    },[dispatch])

    if (usersPage.isFetching){
        return <Preloader />
    } else {
        return !userId
            ? <ItemsTable array={usersPage.users} itemComponent={UserItem}/>
            : <SingleUser userId={userId}/>
    }
}