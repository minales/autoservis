import { useState, useEffect } from 'react';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import './Banner.css'
import  imagesData from './Slider-data'


function Banner(){
   
    const [currentSlide, setCurrentSlide] = useState(0)
    const slideLength = imagesData.length;
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 8000;

    const nextSlide = () =>{
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
    };

    const previousSlide = () =>{
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
    };

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    
    useEffect(()=>{
        setCurrentSlide(0)
    }, [])

    useEffect(()=>{
        if (autoScroll){
            auto();
        }
        return () => clearInterval(slideInterval)
    }, [currentSlide])

    return(
        <section className='slider'>
            {imagesData.map((slide, index) => {

                return(
                    <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                        {index === currentSlide && (
                            <>
                                <img src={require("./images/"+slide.image)} className='slide-image' />
                                <div className="slide-content">
                                    <h3 className="slide-title">{slide.title}</h3>
                                    <p className="slide-desc">{slide.description}</p>
                                </div>
                            </>
                        )}
                    </div>
                )
            })}
        </section>
    )
} 
export default Banner;