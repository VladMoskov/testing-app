import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from 'react-router-dom';
import {TestItem} from "./TestItem/TestItem";
import {SingleTestContainer} from "./SingleTest/SingleTestContainer";
import Preloader from "../common/Preloader";
import {getTests, setIsFetching} from "../Redux/tests-reducer";
import {useDispatch, useSelector} from "react-redux";
import s from './TestsPage.module.css';
import AddTest from "../AdminPanel/AddTest/AddTest";

export const TestsPage = () => {

    const dispatch = useDispatch();
    const testId = useParams().testId;
    const testsPage = useSelector(state => state.testsPage);
    const [isModal, setIsModal] = useState(false);

    const tests = testsPage.tests
        .map((test, index) =>
            <TestItem
                key={test.id}
                test={test}
                even={index % 2}
            />)

    useEffect(() => {
        dispatch(getTests());
        return () => dispatch(setIsFetching(true));
    }, [dispatch])

    useEffect(()=> {
       if (testId) setIsModal(true);
    },[testId])

    if (testsPage.isFetching) {
        return <Preloader/>
    } else {
        return <div className={s.wrapper}>
            {tests}
            {isModal && <SingleTestContainer testId={testId} setIsModal={setIsModal}/>}
            <NavLink to='/admin-panel/add-test'>
                <button>Создать тест</button>
            </NavLink>
        </div>
    }
}


