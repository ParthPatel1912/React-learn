import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Counterclass from './Components/Counterclass';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Error from './Components/Error';
import Counterfun from './Components/Counterfun';
import Color from './Components/ColorParent1';
import Home from './Components/Home';

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/counterclass' element={<Counterclass/>}></Route>
                <Route path='/counterfun' element={<Counterfun/>}></Route>
                <Route path='/color' element={<Color/>}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes>
        </>
    );
}

export default App;
