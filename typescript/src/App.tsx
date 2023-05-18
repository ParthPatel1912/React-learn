import React from 'react';
import './App.css';
import Todo from './components/Todo';
import { Route, Routes } from 'react-router';
import ApiFetch from './components/ApiFetch';
import ApiAxios from './components/ApiAxios';
import Quiz from './components/Quiz';

function App() {
    return (
        <div>
            <Routes>
                <Route path='type-todo' element={<Todo/>} />
                <Route path='api-fetch' element={<ApiFetch/>} />
                <Route path='api-axios' element={<ApiAxios/>} />
                <Route path='quiz' element={<Quiz/>} />
            </Routes>
        </div>
    );
}

export default App;
