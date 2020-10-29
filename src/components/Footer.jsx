import React from 'react';

export default function Footer(props) {
  return (
    <div className='footer'>
      <button onClick={props.last_page} className='last-page'>Last page</button>
      <button onClick={props.page} className='next-page'>Next page</button>
    </div>
  )
}
