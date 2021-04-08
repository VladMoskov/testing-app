import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {TestItem} from "./TestItem";
import {SingleTest} from "./SingleTest/SingleTest";
import Preloader from "../common/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {ItemsTable} from "../common/ItemsTable";
import {testThunks} from "../../BLL/Creators/ThunkCreators"
import {testActions} from "../../BLL/Creators/ActionCreators";

export const TestsPage = () => {

    const dispatch = useDispatch();
    const testId = useParams().testId;
    const testsPage = useSelector(state => state.testsPage);
    const [isModal, setIsModal] = useState(false);

    useEffect(() => {
        dispatch(testThunks.getTests());
        return () => dispatch(testActions.setIsFetchingTests(true));
    }, [dispatch])

    useEffect(() => {
        if (testId) setIsModal(true);
    }, [testId])

    if (testsPage.isFetching) {
        return <Preloader/>
    } else {
        return <ItemsTable array={testsPage.tests} itemComponent={TestItem}>

            {isModal && <SingleTest testId={testId} setIsModal={setIsModal}/>}

        </ItemsTable>
    }
}


