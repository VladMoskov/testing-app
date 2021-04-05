import React, {useEffect} from 'react';
import s from './SingleTest.module.css';
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../../common/Preloader";
import {SingleTest} from "./SingleTest";
import {testThunks} from "../../../BLL/Creators/ThunkCreators";
import {testActions} from "../../../BLL/Creators/ActionCreators";

export const SingleTestContainer = ({testId, setIsModal}) => {

    const test = useSelector(state => state.singleTestPage)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(testThunks.getTest(testId));
        return () => dispatch(testActions.setIsFetchingSingleTest(true))
    }, [testId, dispatch])

    return <div className={s.wrapper}>
        <div className={s.contentWrapper}>

            {test.isFetching ? <Preloader/> : <SingleTest setIsModal={setIsModal} test={test}/>}

        </div>
    </div>
}

