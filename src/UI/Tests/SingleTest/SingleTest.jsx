import React, {useEffect, useState} from 'react';
import s from './SingleTest.module.css';
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../../common/Preloader";
import {testThunks} from "../../../BLL/Creators/ThunkCreators";
import {testActions} from "../../../BLL/Creators/ActionCreators";
import {NavLink} from "react-router-dom";
import close from "../../../img/close-x.svg";
import {TestInProgress} from "../TestInProgress/TestInProgress";

export const SingleTest = ({testId, setIsModal}) => {

    const [inProgress, setInProgress] = useState(false)
    const authUser = useSelector(state => state.authUser)
    const test = useSelector(state => state.singleTestPage)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(testThunks.getTest(testId));
        return () => dispatch(testActions.setIsFetchingSingleTest(true))
    }, [testId, dispatch])

    return <div className={s.wrapper}>
        <div className={s.contentWrapper}>

            {test.isFetching
                ? <Preloader/>
                : <div className={s.content}>

                    <div className={s.header}>
                        <h1>{test.name}</h1>
                        <h3>id: {test.id}</h3>
                        <NavLink
                            to={'/tests'}
                            onClick={() => setIsModal(false)}
                        >
                            <img src={close} alt={''}/>
                        </NavLink>
                    </div>

                    {authUser.isAuth && inProgress
                        ? <TestInProgress test={test} authUserData={authUser.authUserData}/>
                        : <div className={s.body}>
                            <h2>{test.description}</h2>
                            <div className={s.startButton}>
                                <button onClick={()=>setInProgress(true)}>Начать</button>
                            </div>
                        </div>
                    }

                </div>}

        </div>
    </div>
}

