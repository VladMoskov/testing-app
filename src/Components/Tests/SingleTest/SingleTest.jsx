import React, {useState} from 'react';
import s from './SingleTest.module.css';
import {NavLink} from "react-router-dom";
import close from '../../../images/close-x.svg';
import {TestInProgress} from "../TestInProgress/TestInProgress";

export const SingleTest = ({test, setIsModal}) => {

    const [inProgress, setInProgress] = useState(false)

    return <div className={s.content}>

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

        {inProgress
            ? <TestInProgress test={test}/>
            : <div className={s.body}>
                <h2>{test.description}</h2>
                <div className={s.startButton}>
                    <button onClick={()=>setInProgress(true)}>Начать</button>
                </div>
            </div>
        }

    </div>

}

