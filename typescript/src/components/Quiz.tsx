import React, { Component } from 'react'
import QuizCard from './QuizCard'
import { QuestionState, fetchQuizQestions, Difficulty } from '../API'

type AnswerObject = {
    question: string
    answer: string
    correct: boolean
    correctAnswer: string
}

interface State {
    loading: boolean,
    questions: QuestionState[] ,
    number: number,
    userAnswers: AnswerObject[],
    score: number,
    gameOver: boolean
};

const nextQuestion = () => {

}

const TOTAL_QUESTIONS = 10;

// console.log(fetchQuizQestions(10, Difficulty.EASY));

export class Quiz extends Component<{}, State> {
    state = {
        loading: false,
        questions: [],
        number: 0,
        userAnswers: [],
        score: 0,
        gameOver: true
    };

    startQuiz = async () => {
        this.setState({
            loading: true,
            gameOver: false,
        })
        const newQuestions = await fetchQuizQestions(
            TOTAL_QUESTIONS,
            Difficulty.EASY
        )
        this.setState({
            ...this.state,
            questions: newQuestions,
            score: 0,
            userAnswers: [],
            number: 0
        })
        this.setState({
            loading: false
        })

    }
    checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        // const answer = e.currentTarget.value;
        const correct = this.state.questions[this.state.number]
        // @ts-ignore
        console.log("file: Quiz.tsx:63 ~ Quiz ~ correct:", correct.correct_answer, 'correct')
        // if (correct) this.setState({ score: this.state.score + 1 });
        // const answerObject = {
            // question: this.state.questions[number].question,
        //     answer,
        //     correct,
        //     correctAnswer: this.state.questions[number].correct_answer,
        // };
        // this.setState({
        //     UserAnswers: (prev => [...prev, answerObject]);
        // })
    }
    render() {
        console.log(this.state, 'data loaded')
        return (
            <div>
                <h1>Quiz Exam</h1>
                {this.state.gameOver || this.state.userAnswers.length === TOTAL_QUESTIONS ? (
                    <button onClick={this.startQuiz}>Start</button>
                ) : null}
                {!this.state.gameOver ? (<p>Score : </p>) : null}
                {this.state.loading && (<p>Loading Questions.........</p>)}
                {!this.state.loading && !this.state.gameOver && (
                    <QuizCard
                        questionNr={this.state.number + 1}
                        totalQuestion={TOTAL_QUESTIONS}
                        question={this.state.questions[this.state.number]}
                        answers={this.state.questions[this.state.number]}
                        userAnswer={this.state.userAnswers ? this.state.userAnswers[this.state.number] : undefined}
                        callback={this.checkAnswer}
                    />)}
                <button onClick={nextQuestion}>Next</button>
            </div>
        )
    }
}

export default Quiz