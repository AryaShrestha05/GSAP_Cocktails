import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import { SplitText } from 'gsap/all';
import { useMediaQuery } from 'react-responsive';
gsap.registerPlugin(SplitText);

const Hero = () => {

    const videoRef = useRef()
    const isMobile = useMediaQuery({ maxWidth: 767 })

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
    
        //when top reaches 50% animation starts, else center 60% 
    const startValue = isMobile ? 'top 50%' : 'center 60%';
        //when top goes 120% past top of the screen it will end else 
        //when bottom of video goes to top of screen it ends
    const endValue = isMobile ? '120% top' : 'bottom top';

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: 'video',
            start: startValue,
            end: endValue,
            scrub: true,
        /**keeps the video stuck while scrolling through it (like freezing it 
         * on screen while the user scrolls). */
            pin: true,
        }
    })
    videoRef.current.onloadedmetadata = () => {
        /**Telling GSAP from currentTime = 0 → to currentTime = full video duration, 
         * animate based on scroll. */
        tl.to(videoRef.current, {
            currentTime: videoRef.current.duration
        })
    }
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
            <div className = "video absolute inset-0">
                <video
                    ref={videoRef}
                    src="/videos/output.mp4"
                    muted
                    playsInline
                    preload='auto'/>
            </div>
        </>
    )//return
}//Hero

export default Hero