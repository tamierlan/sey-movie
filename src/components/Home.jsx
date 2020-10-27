import React from 'react';
import { FaStar } from 'react-icons/fa';
import { BsStarHalf } from 'react-icons/bs';
import { BsStar } from 'react-icons/bs';
import Movies from './Movies';

export default function Home(props) {

  const image = 'http://image.tmdb.org/t/p/';
  const image_size = ['w45', 'w185', 'h632', 'original']

  return (
    <div className='App'>
    {
      props.data.data.map(e => {
        return (
          <div className='column'>
            <div className='card' key={e.id}>
              <div className='name-wrapper'>
                <h3>{e.name}</h3>
              </div>
              <img style={{height: '130px'}} src={image + image_size[1] + e.profile_path} alt={e.name} />
              <p>known as <strong>{e.known_for_department}</strong></p>
              <p>{e.gender === 2 ? 'male actor' : 'female actor'}</p>
              <Movies data={e.known_for} />
              <p><FaStar /><FaStar /><BsStarHalf /><BsStar />  { e.popularity}</p>
            </div>
          </div>
        )
      })
    }
    </div>
  )
}
