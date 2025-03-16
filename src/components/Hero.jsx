import React,{ useState, useEffect } from 'react'
import { heroInformation } from '../assets/data/data.js'
import angleRight from '../assets/images/icon-angle-right.svg'
import angleLeft from '../assets/images/icon-angle-left.svg'
import arrow from '../assets/images/icon-arrow.svg'

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
    console.log(infoIndex);
  };

  return (
    <div>
      {
        info.map(details => (
          <div key={details.id} className='details'>
            <img src={details.images.desktop} alt="" className='infoImage' />
            <div>
              <div>
                <h1>{details.heading}</h1>
                <p>{details.discription}</p>
                <button className='shopBtn'>SHOP NOW <img src={arrow} alt="" /></button>
              </div>
              <div className='buttonsDiv'>
                <button><img src={angleLeft} alt="" id='decrement' onClick={handleArrowClick}/></button>
                <button><img src={angleRight} alt=""  id='increment'onClick={handleArrowClick}/></button>
              </div>
            </div>
          </div>
        ))    
      }
    </div>
  )
}

export default Hero
