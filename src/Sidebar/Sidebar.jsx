import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
    return (
        <div>
            <div className={s.wrapper}>
                <NavLink activeClassName={s.active} to={'/tests'}>
                    <div className={s.navItem}>Tests</div>
                </NavLink>
                <NavLink activeClassName={s.active} to={'/my-stats'}>
                    <div className={s.navItem}>My Stats</div>
                </NavLink>
                <NavLink activeClassName={s.active} to={'/info'}>
                    <div className={s.navItem}>Info</div>
                </NavLink>
                <NavLink activeClassName={s.active} to={'/settings'}>
                    <div className={s.navItem}>Settings</div>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar;