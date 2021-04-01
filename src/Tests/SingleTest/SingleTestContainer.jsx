import React, {useEffect} from 'react';
import {getTest, setIsFetching} from "../../Redux/single-test-reducer";
import s from './SingleTest.module.css';
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../../common/Preloader";
import {SingleTest} from "./SingleTest";

export const SingleTestContainer = ({testId, setIsModal}) => {

    const test = useSelector(state => state.singleTestPage)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTest(testId));
        return () => dispatch(setIsFetching(true))
    }, [testId, dispatch])

    return <div className={s.wrapper}>
        <div className={s.contentWrapper}>

            {test.isFetching ? <Preloader/> : <SingleTest setIsModal={setIsModal} test={test}/>
            }
        </div>
    </div>
}

