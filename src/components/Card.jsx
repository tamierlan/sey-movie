import React from 'react';
import { FaStar } from 'react-icons/fa';
import { BsStarHalf } from 'react-icons/bs';
import { BsStar } from 'react-icons/bs';
import Movies from './Movies';

export default function Card(props) {
  const {
    id,
    name,
    fame,
    image,
    gender,
    movies,
    known_as,
    img_http,
    img_size,
    max_pop,
    min_pop
  } = props;
  
  const average = (max_pop - min_pop) / 4
  const popular = fame.toFixed()
  const one = (min_pop + average).toFixed()
  const two = (min_pop + average + average).toFixed();
  const three = (min_pop + average + average + average).toFixed();
  const four = (min_pop + average + average + average + average).toFixed();

  let holder
  if (popular === min_pop || popular > min_pop+2) {
    holder = <p className='grades'><BsStarHalf /><BsStar /><BsStar /><BsStar /><BsStar /></p>
  } else if (popular >= min_pop && popular < one) {
    holder = <p className='grades'><FaStar /><BsStar /><BsStar /><BsStar /><BsStar /></p>
  } else if(popular >= one && popular < two) {
    holder = <p className='grades'><FaStar /><BsStarHalf /><BsStar /><BsStar/><BsStar /></p>
  } else if (popular >= two && popular < three) {
    holder = <p className='grades'><FaStar /><FaStar /><BsStarHalf /><BsStar/><BsStar/></p>
  } else if (popular >= three && popular < four) {
    holder = <p className='grades'><FaStar /><FaStar /><FaStar /><BsStarHalf /><BsStar /></p>
  } else {
    holder = <p className='grades'><FaStar /><FaStar /><FaStar /><FaStar /><BsStarHalf /></p>
  }





  return (

    <div key={ id } className='column'>
      <div className='card'>
        <div className='name-wrapper'>
          <h3>{ name }</h3>
        </div>
        <img src={ image } style={{ height: '130px' }} alt={ image } />
        <p>known as <strong>{ known_as }</strong></p>
        <p>{ gender === 2 ? 'male actor' : 'female actor' }</p>
        <Movies
          data={ movies }
          img_http={ img_http }
          img_size={ img_size }
        />
        {holder}
      </div>
    </div>
  )
}
