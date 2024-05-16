import React, { useEffect,useState } from 'react'
import {imageUrl} from '../../constants/constants'
import './rowPost.css'
import axios from '../../Axios'
import YouTube from 'react-youtube'
const RowPost = ({url,title,isSmall}) => {
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        axios.get(url)
        .then((response)=>{     
            
            setMovies(response.data.results)
        })
        // .catch(err=>alert('Network Error...'))
    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        }
    }
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
      <YouTube videoId="2g811Eo7K8U" opts={opts} />;

    </div>
  )
}

export default RowPost
