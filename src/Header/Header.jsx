import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div>
            <div className={s.wrapper}>

                <NavLink to='/admin-panel'>
                    <button>adminPanel</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Header;