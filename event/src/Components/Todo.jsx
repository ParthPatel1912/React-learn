import React from 'react'
import { useState } from 'react';
import Table from './Table';
import { Todo_header } from './Users'

const Todo = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (todo.trim())
            setTodos([...todos, todo]);
    };

    const search = (todos) => {
        return todos.map((todo,index) => ({id:index,todo:todo}));
    }

    const deleteTodo = (deleteItem) => {
        const newTodo = todos.filter((item) => item.deleteItem !== deleteItem.id);
        console.log("file: Todo.jsx:21 ~ deleteTodo ~ newTodo:", newTodo)
    }
    return (
        <div className='text-center'>
            <form className='col-md-3 offset-4 row' onSubmit={(e) => {
                e.preventDefault();
                addTodo(e.target.todo.value);
                e.target.todo.value = '';
            }}>
                <input className='form-control' type="text" name="todo" />
                <button className='btn btn-success mt-2' type="submit">Add Todo</button>
            </form>
            {/* {todos.map((todo, index) => (
                <div key={index}>
                    {todo}
                    <button className='btn btn-danger ms-3' onClick={() => {
                        setTodos(todos.filter((_, i) => i !== index));
                    }}>Delete</button>
                </div>
            ))} */}
            <Table header={Todo_header} todo={search(todos)} delete={(item) => deleteTodo(item)} />
        </div>
    )
}

export default Todo
