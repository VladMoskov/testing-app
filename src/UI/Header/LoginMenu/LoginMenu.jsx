import React, {useState} from 'react';
import s from "../Header.module.css";
import avatar from "../../../img/user.png";
import {useDispatch} from "react-redux";
import {usersThunks} from "../../../BLL/Creators/ThunkCreators";

export const LoginMenu = ({authUserData}) => {

    const dispatch = useDispatch();
    const [isModal, setIsModal] = useState(false);

    return <div
        className={s.loginContainer}
        onClick={() => setIsModal(true)}
        onMouseLeave={() => setIsModal(false)}
    >
        <div className={s.inner}>
            <img src={authUserData.img || avatar} alt={''}/>
            <div className={s.name}>
                <h1>{authUserData.name}</h1>
                <h1>{authUserData.lastName}</h1>
            </div>
        </div>

        {isModal && <button
            onClick={()=> {
                setIsModal(false);
                dispatch(usersThunks.deleteAuthUser(authUserData.id))
            }}
            className={s.logout}
        >Logout</button>
        }
    </div>


}