import './App.css';
import Cart from './component/Cart';
import List from './component/List';
import { Routes, Route } from 'react-router-dom';
import Language from './component/Language';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<List />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/i18' element={<Language />}></Route>
      </Routes>
    </>
  );
}

export default App;
