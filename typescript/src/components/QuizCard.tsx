
import React, { Component } from 'react'

type Props = {
    question?: string | any
    answers?: string[]
    callback?: any
    userAnswer?: any
    questionNr?: number
    totalQuestion?: number
}


export class QuizCard extends Component<Props> {
    render(): JSX.Element {

        return (
            <div>

                {/* <h1>{this.props.question.question}</h1> */}
                <p>
                    Question:{this.props.questionNr} / {this.props.totalQuestion}
                </p>
                <p dangerouslySetInnerHTML={{__html: this.props.question.question}}/>
                <div>
                    {this.props.question.answer.map((answers:any, index:number) => (
                        <div key={`hello${index}`}>
                            <button disabled={this.props.userAnswer} value={answers} onClick={this.props.callback}>
                                <span dangerouslySetInnerHTML={{__html: answers}}/>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default QuizCard