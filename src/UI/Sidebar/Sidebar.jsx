import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Sidebar = ({modalState}) => {

    const isAdmin = useSelector(state => state.authUser.authUserData?.isAdmin);

    return (
        <div>
            <div className={s.wrapper} onClick={()=>modalState[1](!modalState[0])}>
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