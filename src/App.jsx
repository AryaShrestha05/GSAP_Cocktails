import React from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
//These gsap plugins arent automatically active so you have to register them. you only need to do this once
import { ScrollTrigger} from "gsap/all";

//Makes sure both plugins are used globally for every file to use
//splittext splits texts and individually moves it
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <div className={"flex-center"}>
            <h1 className="text-5xl text-indigo-300">Hello</h1>
        </div>
    )
}

export default App;