import React from 'react'

import './Button.css'

const button = ( { children, onSubmit } ) => (
  <button 
    type="submit"
    className="home-page__button"
    onClick={onSubmit} 
    onSubmit={onSubmit}
  >
    { children }
  </button>
)

export default button