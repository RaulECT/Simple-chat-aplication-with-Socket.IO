import React, { Component } from 'react'

import Title from '../../components/HomePage/Title/'
import Form from '../../components/HomePage/Form/'

import './HomePage.css'

class HomePage extends Component {

  render() {
    return (
      <div className="home-page">
        <Title />

        <Form />
      </div>
    )
  }
}

export default HomePage