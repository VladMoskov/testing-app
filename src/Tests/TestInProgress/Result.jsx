import React from 'react';
import s from './TestInProgress.module.css';
import {useSelector} from "react-redux";
import correct from './../../images/correct.svg';
import incorrect from './../../images/incorrect.svg';

export const Result = ({test}) => {

    const result = useSelector(state => state.progressPage.result)


    return <div className={s.body}>
        {test.questions.map((q, i) => (
            <div key={i} className={s.questionWrapper}>
                <h1>{q.question}</h1>
                <div className={s.answersWrapper}>
                    <div className={s.leftAnswers}>
                        {q.answers.map((a, i) => (
                            <div key={i}>
                                <h2>{a.answer}</h2>
                                {result[q.question].answers.map((res, i) => (
                                    <div key={i}>
                                        {res && a.isCorrect && <img className={s.correct} src={correct} alt={''}/>}
                                        {res && !a.isCorrect && <img className={s.correct} src={incorrect} alt={''}/>}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className={s.rightAnswers}>

                    </div>
                </div>
            </div>
        ))}
    </div>
}


