import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import Home from './Components/Home'
import SignUp from './Components/SignUp'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Singlefilter from './Components/Singlefilter';
import Multifilter from './Components/Multifilter';
import Todo from './Components/Todo';
import Test from './Components/test';
import FormFormik from './Components/FormFormik';
import YupForm from './Components/YupForm';
import ReactHookForm from './Components/ReactHookForm';

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/signup' element={<SignUp />}></Route>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/singlefilter" element={<Singlefilter />} />
                <Route path="/multifilter" element={<Multifilter />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/test" element={<Test />} />
                <Route path="/formikForm" element={<FormFormik />} />
                <Route path="/yupForm" element={<YupForm />} />
                <Route path="/reactHookForm" element={<ReactHookForm />} />
            </Routes>
        </div>
    );
}

export default App;
