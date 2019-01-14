import React, {Component} from 'react'

import Input from '../Input'
import Button from '../Button'
import './Form.css'

class Form extends Component {

  render() {
    return(
      <form 
        className="home-page__form"
      >
        <Input 
          name="username"
          placeholder="Enter a user name..."
        />

        <Button
          onSubmit={ () => {} }
        >
          Enter
        </Button>
      </form>
    )
  }
}

export default Form