import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React from 'react';
import { SplitText } from 'gsap/all';
gsap.registerPlugin(SplitText);

const Hero = () => {
    useGSAP(() => {
        //I want to target the title class, and split it to both characters and words:
        const heroSplit = new SplitText('.title', { type:'chars, words' })
        //I want to target the subtitle class and split it to only lines.
        const paragraphSplit = new SplitText('.subtitle', { type:'lines' })

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
        })
    }, [])
    
    return (
        <>
            <section id ="hero" className="noisy">
                <h1 className = "title">Vivi </h1>
                <img
                src='/images/hero-left-leaf.png'
                alt='left leaf'
                className="left-leaf"
                />

                <img
                    src='/images/hero-right-leaf.png'
                    alt='right leaf'
                    className="right-leaf"
                />
                <div className = "body">
                    <div className = "content">
                        <div className = "space-y-5 hidden md:block">
                            <p>Mandala Street, Thamel</p>
                            <p className="subtitle">Sip the Sprit <br /> of Summer</p>
                        </div>

                        <div className='view-cocktails'>
                            <p className = "subtitle">Unforgettable soulful vibes you won’t find anywhere else in Kathmandu!
                            </p>
                            <a href = '#cocktails'>View Drinks</a>
                        </div>    
                    </div>
                </div>
            </section>
        </>
    )//return
}//Hero

export default Hero