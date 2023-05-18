import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Form from './Components/Form';
import FormFun from './Components/FormFun';
import UseEffect from './Components/UseEffect';
import ContextAPI from './Components/ContextAPI';
import UseReducer from './Components/UseReducer';
import Ref from './Components/Ref';
import Memo from './Components/Memo';
import Callback from './Components/Callback';
import New from './Components/New';
import Header from './Components/Header';
import Error from './Components/Error';
import { Route, Routes } from 'react-router-dom';
import Param from './Components/Param';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<New />}></Route>
                <Route path='/Form' element={<Form />}></Route>
                <Route path='/form'>
                    <Route path='Callback' element={<Callback />}></Route>
                    <Route path='Contextapi' element={<ContextAPI />}></Route>
                    <Route path='Formfun' element={<FormFun />}></Route>
                    <Route path='Memo' element={<Memo />}></Route>
                    <Route path='Reducer' element={<UseReducer />}></Route>
                    <Route path='Ref' element={<Ref />}></Route>
                    <Route path='Effect' element={<UseEffect />}></Route>
                    <Route path='Form' element={<Form />}></Route>
                </Route>
                <Route path='Param' element={<Param/>}></Route>
                <Route path='Param/:media' element={<Param/>}></Route>
                <Route path='Param/:media/:id' element={<Param/>}></Route>
                <Route path='*' element={<Error/>}></Route>
            </Routes>
            {/* <Form/>
            <FormFun/>
            <hr />
            <UseEffect/>
            <hr />
            <ContextAPI/>
            <hr />
            <UseReducer/>
            <hr />
            <Ref/>
            <hr />
            <Memo/>
            <hr />
            <Callback/> */}
        </div>
    )
}

export default App;
