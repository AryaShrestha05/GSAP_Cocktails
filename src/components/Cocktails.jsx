import gsap from "gsap";
import React from "react";
import { cocktailLists } from '/constants/index.js';
import { mockTailLists } from "../../constants";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


const Cocktails = () => {

  useGSAP(() => {
    const parralaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#cocktails',
        start: 'top 30%',
        end: 'bottom 80%',
        scrub: true
      }//scrollTrigger
    })

    parralaxTimeline.from('#c-left-leaf', {
      x:-100,
      y: 100
    })

    .from('#c-right-leaf', {
      x: 100,
      y: 100
    })
  })

  return(
    <section id="cocktails" className="noisy">
      <img src= "/images/cocktail-left-leaf.png" alt="Left-Leaf" id="c-left-leaf" />
      <img src="/images/cocktail-right-leaf.png" alt="Right-Leaf" id="c-right-leaf" />

      <div className="list">
        <div className = "popular">
          <h2>Most Popular Cocktails:</h2>

          <ul>
            {cocktailLists.map((drink ) => (
              <li key={drink.name}>
                <div className = "md:me-28">
                  <h3>{drink.name}</h3>
                  <p>{drink.country} | {drink.detail}</p>
                </div>
                <span>- {drink.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className = "loved">
          <h2>Most Loved Mocktails:</h2>

          <ul>
            {mockTailLists.map((drink ) => (
              <li key={drink.name}>
                <div className = "me-28">
                  <h3>{drink.name}</h3>
                  <p>{drink.country} | {drink.detail}</p>
                </div>
                <span>- {drink.price}</span>
              </li>
            ))}//map
          </ul>
        </div>
      </div>
    </section>

  )
}

export default Cocktails;