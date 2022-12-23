import './App.css';


import {Header} from './components/header/Header';
import {Home} from "./components/home/Home";
import {About} from "./components/about/About";
import {Skills} from "./components/skills/Skills";
import {Services} from "./components/services/Services";

function App() {
    return (
        <>
            <Header/>
            <main className="main">
                <Home/>
                <About />
                <Skills/>
                <Services/>s
            </main>
        </>
    );
}

export default App;
