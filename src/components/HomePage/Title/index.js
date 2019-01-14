import React, { Component, Fragment } from 'react'

import './Title.css'

class Title extends Component {

  render() {
    return (
      <Fragment>
        <h1 className="home-page__main-title">ChatJS</h1>
        <h2 className="home-page__sub-title">Find new people!!</h2>
      </Fragment>
    )
  }
}

export default Title