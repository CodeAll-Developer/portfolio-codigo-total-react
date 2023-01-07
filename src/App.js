import './App.css';


import {Header} from './components/header/Header';
import {Home} from "./components/home/Home";
import {About} from "./components/about/About";
import {Skills} from "./components/skills/Skills";
import {Services} from "./components/services/Services";
import {Qualification} from "./components/qualification/Qualification";
import {Testimonial} from "./components/testimonial/Testimonial";
import {Contact} from "./components/contact/Contact";
import {Footer} from "./components/footer/Footer";
import {ScrollUp} from "./components/scrollup/ScrollUp";
import {Work} from "./components/work/Work";

function App() {
    return (
        <> {/*fragment*/}
            <Header/>
            <main className="main">
                <Home/>
                <About />
                <Skills/>
                <Services/>
                <Work/>
                <Qualification />
                {/* <Testimonial/> */}
                <Contact />
                <Footer/>
                <ScrollUp/>
            </main>
        </>
    );
}

export default App;
