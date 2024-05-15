import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl}  from '../../constants/constants'
import axios from '../../Axios'
import './banner.css'
const Banner = () => {
const [movie, setMovie] = useState('')
const [slide,setSlide]=useState(0)
 useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then((response)=>{
      
        setMovie(response.data.results[slide])
        setSlide(slide+1)
    })
 },[])
    
  return (
    <div className='banner' style={{backgroundImage:`url(${movie?(imageUrl+movie.backdrop_path):""})`}}>
      <div className='content'>
                <h1 className='title'>{movie?movie.title:''}</h1>
                <div className='banner_buttons'>
                        <button className='button'>Play</button>
                        <button className='button'>My List</button>
                </div>
                <h1 className='description'>{movie.overview}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
