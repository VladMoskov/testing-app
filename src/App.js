import './App.module.css';
import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import s from './App.module.css'
import {Route} from "react-router-dom";
import {TestsPage} from "./Tests/TestsPage";
import AdminPanel from "./AdminPanel/AdminPanel";
import AddTest from "./AdminPanel/AddTest/AddTest";

function App() {
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
                <Route path='/tests/:testId?'
                       render={() => <TestsPage/>}/>
                <Route exact path='/admin-panel'
                       render={() => <AdminPanel/>}/>
                <Route exact path='/admin-panel/add-test'
                       render={() => <AddTest/>}/>
            </div>
            <div className={s.right}/>
            <Footer className={s.footer}/>

        </div>
    );
}

export default App;
