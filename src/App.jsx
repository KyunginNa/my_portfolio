import React, { Component } from 'react'
import PropTypes from 'prop-types'

class App extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <h3>Hello World!</h3>
      </div>
    )
  }
}

export default App
