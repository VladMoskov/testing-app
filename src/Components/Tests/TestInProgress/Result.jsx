import React from 'react';
import s from './TestInProgress.module.css';
import {useSelector} from "react-redux";
import correct from '../../../images/correct.svg';
import incorrect from '../../../images/incorrect.svg';

export const Result = ({test}) => {

    const result = useSelector(state => state.progressPage.result)

    return <div className={s.body}>
        {test.questions.map((q, i) => (
            <div key={i} className={s.questionWrapper}>
                <h1>{q.question}</h1>
                <div className={s.answersWrapper}>
                    <div className={s.leftAnswers}>
                        {result[q.question].answers.map((res, i) => (
                            <div className={s.question} key={i}>
                                {res
                                    ? q.answers[i].isCorrect
                                        ? <img className={s.correct} src={correct} alt={''}/>
                                        : <img className={s.correct} src={incorrect} alt={''}/>
                                    : <span className={s.space}/>
                                }
                            </div>
                        ))}
                    </div>
                    <div className={s.rightAnswers}>
                        {q.answers.map((a, i) => (
                            <div className={`${s.question} ${s.questionString}`} key={i}>
                                <h2>{a.answer}</h2>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={s.correctAnswer}>
                    <h1>Правильный ответ: {q.answers.map(a => a.isCorrect && a.answer)}</h1>
                </div>
            </div>
        ))}
    </div>
}
