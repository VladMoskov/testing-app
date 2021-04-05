import React from 'react';
import {TestsPage} from "../Components/Tests/TestsPage";
import {Route} from "react-router-dom";
import {AddTestPage} from "../Components/AddTest/AddTestPage";
import {UsersPage} from "../Components/Users/UsersPage";
import {LoginPage} from "../Components/Login/Login";



export const routes = [
    {
        path: "/tests/:testId?",
        component: TestsPage
    },
    {
        path: "/add-test",
        component: AddTestPage,
    },
    {
        path: "/users",
        component: UsersPage,
    },
    {
        path: "/login",
        component: LoginPage
    },
]

export const Routes = (route) => {
    return <Route
        path={route.path}
        render={props => (
            <route.component {...props} routes={route.routes}/>
        )}
    />
}