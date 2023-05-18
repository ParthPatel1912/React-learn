import React from 'react'
import { ITask } from '../interface'

interface Props {
    details : ITask;
    completetask(taskName: string) : void;
}

const TodoList = ({details, completetask}: Props) => {
    return (
        <div>
            <div>
                &nbsp;
                {details.taskName} &nbsp; - &nbsp; {details.hour} - &nbsp;
                <button onClick={() => completetask(details.taskName)}>Delete</button>
            </div>
        </div>
    )
}

export default TodoList
