import './App.module.css';
import React, {useEffect} from "react";
import {Header} from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import s from './App.module.css'
import {Switch} from "react-router-dom";
import {routes, Routes} from "./BLL/routes";
import {useDispatch} from "react-redux";
import {getAuthUser} from "./BLL/Reducers/users/auth-user";

function App() {

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getAuthUser())
    },[dispatch])

    return (
        <div className={s.wrapper}>

            <div className={s.header}>
                <Header/>
            </div>
            <div className={s.left}/>
            <div className={s.sidebar}>
                <Sidebar/>
            </div>
            <div className={s.content}>

                <Switch>
                    {routes.map((route, i) => (
                        <Routes key={i} {...route} />
                    ))}
                </Switch>

            </div>
            <div className={s.right}/>

        </div>
    );
}

export default App;
