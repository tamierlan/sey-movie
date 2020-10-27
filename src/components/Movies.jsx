import React from 'react';

export default function Movies(props) {
  const http = 'http://image.tmdb.org/t/p/';
  const image_size = ['w45', 'w185', 'h632', 'original']

  console.log('props ', props)
  return (

    <div className='movie-wrapper'>
    {props.data.map(e => {
      return (
        <img src={http + image_size[0] + e.poster_path} alt={e.poster_path} />
      )
    })}
    </div>
  )
}
