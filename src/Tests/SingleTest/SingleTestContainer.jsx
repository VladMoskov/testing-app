import React, {useEffect} from 'react';
import {getTest, setIsFetching} from "../../Redux/single-test-reducer";
import s from './SingleTest.module.css';
import {NavLink} from "react-router-dom";
import close from './../../images/close-x.svg';
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../../common/Preloader";

export const SingleTest = ({testId, setIsModal}) => {

    const test = useSelector(state => state.singleTestPage)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTest(testId));
        return () => dispatch(setIsFetching(true))
    }, [testId, dispatch])

    return <div className={s.wrapper}>
        <div className={s.contentWrapper}>

            {test.isFetching && <Preloader/>}

            {!test.isFetching && <div className={s.content}>

                <div className={s.header}>
                    <h1>{test.name}</h1>
                    <NavLink
                        to={'/tests'}
                        onClick={() => setIsModal(false)}
                    >
                        <img src={close} alt={''}/>
                    </NavLink>
                </div>
                
            </div>}
        </div>
    </div>
}

