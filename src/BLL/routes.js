import React from 'react';
import {TestsPage} from "../UI/Tests/TestsPage";
import {Route} from "react-router-dom";
import {AddTestPage} from "../UI/AddTest/AddTestPage";
import {UsersPage} from "../UI/Users/UsersPage";
import {LoginPage} from "../UI/Login/Login";



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
        path: "/users/:userId?",
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