import logo from './logo.svg';
import './App.css';
import Mui from './Component/Mui';
import Tailwind from './Component/Tailwind';
import Antd from './Component/Antd';
import PrimeReact from './Component/PrimeReact';

function App() {
    return (
        <div className="App">
            <Mui/>
            <br /><br /><hr /><hr />
            <Tailwind/>
            <br /><br /><hr /><hr />
            <Antd/>
            <br /><br /><hr /><hr />
            <PrimeReact/>
        </div>
    );
}

export default App;
