import React from 'react';
import { navLinks } from '/constants/index.js';
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline( {
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top',
            }//scrollTrigger
        })//navTween
        navTween.fromTo('nav', { backgroundColor: 'transparent' },
            {  backgroundColor: '#00000050',
                         backgroundFilter: 'blur(10px)',
                        duration: 1,
                        ease: 'power1.inOut',});
    })//useGSAP
    return (
        <nav>
            <div>
                <a href="#home" className={"flex items-center gap-2"}>
                    <img src="/images/logo.jpg" alt="face of flightreacts" height={40} width={40}/>
                    <p>Arya Shrestha</p>
                </a>

                 <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                             <a href="mailto:arya.shrestha1@marist.edu">{link.title}</a>
                        </li>
                    ))}
                </ul>


            </div>
        </nav>
    )
}
export default Navbar;