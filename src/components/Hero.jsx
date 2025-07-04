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
            opacity: 0,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
        });
        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 3,
            ease: 'expo.inOut',
            stagger: 0.06,
            delay: 0.7,
        });
        gsap.from('.mandala', {
            yPercent: -100,
            opacity: 0,
            duration: 5,
            ease: 'expo.inOut',
            stagger: 0.06,
            delay: 1,
        });
        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                //Animation animates according to scroll
                scrub: true,
            }
        })
        .to('.right-leaf', { y: 200 }, 0)
        .to('.left-leaf', { y: -200 }, 0)

    }, [])
    
    return (
        <>
            <section id ="hero" className="noisy">
                <h1 className = "title">MOJITO</h1>
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
                            <p className='mandala'>Mandala Street, Thamel</p>
                            <p className="subtitle">Sip the Sprit <br /> of Summer</p>
                        </div>

                        <div className='view-cocktails'>
                            <p className = "subtitle">Unforgettable soulful vibes you won’t find anywhere else in Kathmandu!
                            </p>
                            <a className='mandala' href = '#cocktails'>View Drinks</a>
                        </div>    
                    </div>
                </div>
            </section>
        </>
    )//return
}//Hero

export default Hero