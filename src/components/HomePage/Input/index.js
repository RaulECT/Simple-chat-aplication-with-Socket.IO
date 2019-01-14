import React from 'react'

import './Input.css'

const input = ( { name, placeholder } ) => (
  <input 
    type="text" 
    name={name} 
    placeholder={ placeholder } 
    className="home-page__input"
  />
)

export default input