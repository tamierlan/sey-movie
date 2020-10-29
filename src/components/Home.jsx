import React from 'react';
import Card from './Card';

export default function Home(props) {
  const { data, img_http, img_size } = props.state;

  const max_pop = Math.max(...data.map(i => i.popularity));
  const min_pop = Math.min(...data.map(i => i.popularity));

  // console.log('max ', max_pop)
  // console.log('min ', min_pop)

  return (
    data.map(e => {
      let id = e.id;
      let name = e.name;
      let image = img_http + img_size[1] + e.profile_path;
      let known_as = e.known_for_department;
      let gender = e.gender;
      let movies = e.known_for;
      let fame = e.popularity



      return (
        <Card
          id={id}
          key={id}
          name={name}
          fame={fame}
          image={image}
          gender={gender}
          movies={movies}
          max_pop={max_pop}
          min_pop={min_pop}
          known_as={known_as}
          img_http={img_http}
          img_size={img_size}
        />
      );
    })
  );
}
