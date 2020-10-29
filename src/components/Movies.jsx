import React from 'react';

export default function Movies(props) {
  // console.log('MOVIES ', props)

  return (
    <div className='movie-wrapper'>
    {props.data.map(e => {

      const { img_http, img_size } = props;
      const image = img_http + img_size[0] + e.poster_path;

      return <img src={ image } alt={e.poster_path} key={ e.id } />
    })}
    </div>
  )
}
