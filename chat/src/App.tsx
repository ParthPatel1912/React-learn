import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './component/Homepage';
import Signup from './component/Signup';
import Signin from './component/Signin';
import Userlist from './component/Userlist';
import Chat from './component/Chat';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/friend' element={<Userlist />} />
        {/* <Route path='/chat' element={<Chat />} /> */}
        <Route path='/chat/:encodeChatId/:encodeChatUserName' element={<Chat />} />
        {/* const chatId = match.params.chatId; */}
      </Routes>
    </>
  );
}

export default App;
