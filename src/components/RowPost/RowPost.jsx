import React, { useEffect,useState } from 'react'
import {imageUrl,API_KEY} from '../../constants/constants'
import './rowPost.css'
import axios from '../../Axios'
import YouTube from 'react-youtube'
const RowPost = ({url,title,isSmall}) => {
    const [movies, setMovies] = useState([])
    const [urlId,setUrlId]=useState('')
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
          autoplay: 1,
        }
    }
    const handleMovie=(id)=>{
            console.log(id);
            axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
            .then((response)=>{
                console.log(response.data)
                if(response.data.results.length!==0)
                {
                    setUrlId(response.data.results[0])
                }
                else
                {
                    console.log("empty Array");
                }
            })
    }
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='posters'>
        {
            movies.map((movie)=>
                <img onClick={()=>handleMovie(movie.id)} className={isSmall?'smallPoster':'poster'} src={`${imageUrl+movie.backdrop_path}`} alt="poster" />
            )
        }
      </div>
      {urlId && <YouTube videoId={urlId.key} opts={opts} />}

    </div>
  )
}

export default RowPost
