import React,{ useState, useEffect } from 'react'
import { heroInformation } from '../assets/data/data.js'
import angleRight from '../assets/images/icon-angle-right.svg'
import angleLeft from '../assets/images/icon-angle-left.svg'
import arrow from '../assets/images/icon-arrow.svg'
import aboutDark from '../assets/images/image-about-dark.jpg'
import aboutLight from '../assets/images/image-about-light.jpg'

const Hero = () => {
  const [infoIndex, setInfoIndex] = useState(0)
  const [info, setInfo] = useState([])

  useEffect(() => {
    setInfo([heroInformation[infoIndex]])
  },[infoIndex])

  const handleArrowClick = (e) => {
    if (e.target.id === 'decrement') {
      setInfoIndex((prev) => (prev === 0 ? 2 : prev - 1));
    }
    if (e.target.id === 'increment') {
      setInfoIndex((prev) => (prev === 2 ? 0 : prev + 1));
    }
  };

  return (
    <div>
      {
        info.map(details => (
          <div key={details.id} className='details'>
            <img src={details.images.desktop} alt="" className='infoImage' />
            <div className='heroTextDiv'>
              <div className='infoText'>
                <h1>{details.heading}</h1>
                <p>{details.discription}</p>
                <button className='shopBtn'>SHOP NOW <img src={arrow} alt="" /></button>
              </div>
              <div className='buttonsDiv'>
                <button id='decrement' onClick={handleArrowClick}><img src={angleLeft} alt="" /></button>
                <button id='increment'onClick={handleArrowClick}><img src={angleRight} alt="" /></button>
              </div>
            </div>
          </div>
        ))    
      }
      <div className='about'>
        <img src={aboutDark} alt=''/>  
        <div>
          <h3>About our furniture</h3>
          <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
        </div> 
        <img src={aboutLight} alt="" />  
      </div>
    </div>
  )
}

export default Hero
