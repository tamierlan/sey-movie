import React from 'react';
import { FaStar } from 'react-icons/fa';
import { BsStarHalf } from 'react-icons/bs';
import { BsStar } from 'react-icons/bs';

export default function Search(props) {
  // console.log('search ', props)
  const { searched_data, img_http, img_size } = props.state;

  return (
    searched_data.map(item => {
      let id = item.id;
      let name = item.title;
      let image = item.poster_path ? img_http + img_size[1] + item.poster_path : 'https://spyhollywood.com/wp-content/uploads/2013/03/movies-coming-soon1.png';
      let fame = item.popularity;
      let release_date = item.release_date;
      let backdrop_path = item.backdrop_path;

      return (
        <div key={ id } className='column'>
          <div className='card'>
            <div className='name-wrapper'>
              <h3>{ name }</h3>
            </div>
            <img src={ image } style={{ height: '130px' }} alt={ image } />
            <p><FaStar /><FaStar /><BsStarHalf /><BsStar />  { fame }</p>
            <p>release date: { release_date }</p>
          </div>
        </div>
      );
    })
  )
}
