import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import TestItem from "./TestItem/TestItem";
import {SingleTest} from "./SingleTest/SingleTest";
import Preloader from "../common/Preloader";
import {getTests, setIsFetching} from "../Redux/tests-reducer";
import {useDispatch, useSelector} from "react-redux";


export const TestsPage = () => {

    const dispatch = useDispatch();
    const testId = useParams().testId;
    const testsPage = useSelector(state => state.testsPage)


    useEffect(() => {
        dispatch(getTests());
        return () => dispatch(setIsFetching(true));
    }, [dispatch])

    if (testsPage.isFetching) {
        return <Preloader/>
    } else {
        return <div>
            {testId
                ? <SingleTest id={testId}/>
                : testsPage.tests.map(test =>
                    <TestItem
                        key={test.id}
                        id={test.id}
                        name={test.name}
                        description={test.description}
                    />)
            }
        </div>
    }
}


