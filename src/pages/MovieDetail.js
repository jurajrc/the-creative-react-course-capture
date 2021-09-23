import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'

// data
import { MovieState } from '../movieState'

// Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const MovieDetail = () => {
    const history = useHistory() // save object historie browser
    const url = history.location.pathname; // uloží url z lišty prehliadača
    const [movies, setMovies] = useState(MovieState) // data
    const [movie, setMovie] = useState(null) // jeden objekt v array

    // UseEffect
    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url) // porovná url browser s url v každom poly objektu and save to variable
        setMovie(currentMovie[0]) // save to State
    }, [movies, url]) // kontroluje zmetu v datach a url
    
    return (
        <>
        {movie && (
            <Details  exit="exit" variants={pageAnimation} initial="hidden" animate="show">
                <HeadLine>
                    <h2>{movie.title}</h2>
                    <img src={movie.mainImg} alt="movie" />
                </HeadLine>
                <Awards>
                    {movie.awards.map((award) => (
                        <Award 
                            title={award.title}
                            description={award.description}
                            key={award.title}
                        />
                    ))}
                </Awards>
                <ImageDisplay>
                    <img src={movie.secondaryImg} alt="movie" />
                </ImageDisplay>
            </Details>
        )}
        </>
    )
}

const Details = styled(motion.div)`
    color: white;
`
const HeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20rem;
    position: relative;
    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`
const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
`
const AwardStyle = styled.div`
    padding: 5rem;
    h3 {
        font-size: 2rem;
    }
    .line {
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p {
        padding: 2rem 0rem;
    }
`
const ImageDisplay = styled.div`
    min-height: 50vh;
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`

// components
const Award = ( {title, description} ) => {
  return (
      <AwardStyle>
          <h3>{title}</h3>
          <div className="line"></div>
          <p>{description}</p>
      </AwardStyle>

  )
}

export default MovieDetail
