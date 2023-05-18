import React, { ChangeEvent } from 'react'
import { useState } from 'react';
import TodoList from './TodoList';
import { ITask } from '../interface';

const Todo = () => {
    const [details, setDetails] = useState<string>("");
    const [hours, setHours] = useState<number>(0);
    const [todo, setTodo] = useState<ITask[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "details" && e.target.value !== '') {
            setDetails(e.target.value)
        }
        if (e.target.name === "hours" && Number(e.target.value) !== 0) {
            setHours(Number(e.target.value))
        }
    };

    const addList = () => {
        const Task = { taskName: details, hour: hours };
        if (Task.taskName !== '' && Task.hour !== 0) {
            setTodo([...todo, Task]);
        }
        setDetails('');
        setHours(0);
        console.log(todo);
    }

    const CompleteTask = (taskName: string): void => {
        return setTodo(todo.filter((test) => {
            return test.taskName !== taskName;
        }))
    }
    return (
        <div>
            <div>
                <label htmlFor="todo">Todo Details </label>
                <input type="text" name='details' value={details} id='details' onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="number">Hours </label>
                <input type="number" name="hours" value={hours} id="hours" onChange={handleChange} />
            </div>
            <div>
                <button onClick={addList}>Save</button>
            </div>
            <div>
                {todo.map((detail: ITask, key: number) => {
                    return <TodoList key={key} details={detail} completetask={CompleteTask} />;
                })}
            </div>
        </div>
    )
}

export default Todo
