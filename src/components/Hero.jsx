import React from 'react';

const Hero = () => {
    return (
        <>
            <section id ="hero" className="noisy">
                <h1>MOJITO </h1>
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
            </section>
        </>
    )//return
}//Hero

export default Hero