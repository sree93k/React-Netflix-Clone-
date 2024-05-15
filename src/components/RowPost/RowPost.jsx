import React, { useEffect,useState } from 'react'
import {imageUrl} from '../../constants/constants'
import './rowPost.css'
import axios from '../../Axios'
const RowPost = ({url,title,isSmall}) => {
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        axios.get(url)
        .then((response)=>{
            console.log(response.data);
            setMovies(response.data.results)
        })
        // .catch(err=>alert('Network Error...'))
    })
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='posters'>
        {
            movies.map((movie)=>
                <img className={isSmall?'smallPoster':'poster'} src={`${imageUrl+movie.backdrop_path}`} alt="poster" />
            )
        }
      </div>
    </div>
  )
}

export default RowPost
