import React from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
//These gsap plugins arent automatically active so you have to register them. you only need to do this once
import { ScrollTrigger} from "gsap/all";
import Navbar from './components/Navbar.jsx';
import Hero from "./components/Hero.jsx";

//Makes sure both plugins are used globally for every file to use
//splittext splits texts and individually moves it
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
        </main>
    )
}

export default App;