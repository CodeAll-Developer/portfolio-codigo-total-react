import './App.css';

//importamso el componente del header 
// import { About } from './components/about/About';

import {Header} from './components/header/Header';
import {Home} from "./components/home/Home";

function App() {
    return (
        <>
            <Header/>
            <main className="main">
                <Home/>
            </main>
        </>
    );
}

export default App;
