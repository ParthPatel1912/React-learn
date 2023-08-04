import React, { Component } from 'react'
import QuizCard from './QuizCard'
import { QuestionsState, fetchQuizQestions, Difficulty } from '../API'

export type AnswerObject = {
    question: string
    answer: string
    correct: boolean
    correctAnswer: string
}

interface State {
    loading: boolean,
    questions: QuestionsState[],
    number: number,
    userAnswers: AnswerObject[],
    score: number,
    gameOver: boolean
};

const TOTAL_QUESTIONS = 10;

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
            // ...this.state,
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
        if (!this.state.gameOver) {
            const answer = e.currentTarget.value;
            // @ts-ignore
            const correct = this.state.questions[this.state.number].correct_answer === answer;
            if (correct === true) {
                this.setState((prevState) => ({
                    score: prevState.score + 1,
                }));
            }
            const answerObject: AnswerObject = {
                // @ts-ignore
                question: this.state.questions[this.state.number].question,
                answer: answer,
                correct: correct,
                // @ts-ignore
                correctAnswer: this.state.questions[this.state.number].correct_answer
            };
            this.setState((prevState) => ({
                userAnswers: [...prevState.userAnswers, answerObject],
            }));
        }
    }
    nextQuestion = () => {
        const nextQuestion = this.state.number + 1;
        if (nextQuestion === TOTAL_QUESTIONS) {
            this.setState({ gameOver: true })
        } else {
            this.setState({ number: nextQuestion });
        }
    }

    render() {
        return (
            <div>
                <h1>Quiz Exam</h1>
                {this.state.gameOver || this.state.userAnswers.length === TOTAL_QUESTIONS ? (
                    <button onClick={this.startQuiz}>Start</button>
                ) : null}
                {!this.state.gameOver ? (<p>Score : {this.state.score}</p>) : null}
                {this.state.loading && (<p>Loading Questions.........</p>)}
                {!this.state.loading && !this.state.gameOver && (
                    <QuizCard
                        questionNr={this.state.number + 1}
                        totalQuestion={TOTAL_QUESTIONS}
                        // @ts-ignore
                        question={this.state.questions[this.state.number].question}
                        // @ts-ignore
                        answers={this.state.questions[this.state.number].answer}
                        userAnswer={this.state.userAnswers ? this.state.userAnswers[this.state.number] : undefined}
                        callback={this.checkAnswer}
                    />)}
                {!this.state.gameOver && !this.state.loading && this.state.userAnswers.length === this.state.number + 1 && this.state.number !== TOTAL_QUESTIONS - 1 ? (
                    <button onClick={this.nextQuestion}>Next</button>
                ) : null}
            </div>
        )
    }
}

export default Quiz