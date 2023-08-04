import React, { Component } from 'react'
import AnswerObject from './Quiz'

type Props = {
    question: string
    answers: string[]
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void
    userAnswer: AnswerObject | undefined
    questionNr: number
    totalQuestion: number
}


export class QuizCard extends Component<Props> {
    render(): JSX.Element {
        const {
            question,
            answers,
            callback,
            userAnswer,
            questionNr,
            totalQuestion,
        } = this.props;
        return (
            <div>
                <p>
                    Question:{questionNr} / {totalQuestion}
                </p>
                <p dangerouslySetInnerHTML={{ __html: question }} />
                <div>
                    {answers.map((answers: any, index: number) => (
                        <div key={`hello${index}`}>
                            <button disabled={userAnswer ? true : false} value={answers} onClick={callback}>
                                <span dangerouslySetInnerHTML={{ __html: answers }} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default QuizCard