export interface ITask {
    taskName: string
    hour: number
}

export interface FetchApiData {
    id: number,
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}

export interface AxiosApiData {
    userId: number,
    id: number,
    title: string
}

export interface Quiz {
    question: string
    answer: string[]
    callback: any
    userAnswer: string
    questionNr: number
    totalQuestion: number
}