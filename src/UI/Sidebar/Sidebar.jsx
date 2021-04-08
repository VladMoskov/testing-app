import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = () => {

    const isAdmin = true

    return (
        <div>
            <div className={s.wrapper}>
                <div className={s.navBlock}>
                    <NavLink activeClassName={s.active} to={'/tests'}>
                        <div className={s.navItem}>Тесты</div>
                    </NavLink>
                </div>
                {isAdmin && <div className={s.navBlock}>
                    <NavLink activeClassName={s.active} to={'/users'}>
                        <div className={s.navItem}>Пользователи</div>
                    </NavLink>
                    <NavLink activeClassName={s.active} to={'/add-test'}>
                        <div className={s.navItem}>Создать тест</div>
                    </NavLink>
                </div>
                }
            </div>
        </div>
    )
}

export default Sidebar;