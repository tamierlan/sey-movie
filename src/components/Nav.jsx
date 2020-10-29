import React from 'react';
import { BiCameraMovie } from 'react-icons/bi';


export default function Nav(props) {
  const { search_button, search_letter, home_page, search } = props;
  return (
    <nav>
      <a onClick={home_page} className='logo'><BiCameraMovie /></a>
      <a onClick={ search_button } className='logo-text'>Search</a>
      <input onChange={search_letter} type='text' value={ search } placeholder='movie name ...' />
    </nav>
  )
}
