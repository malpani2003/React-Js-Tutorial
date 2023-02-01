import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggin: false
    }
  }
  loginin = () => {
    this.setState({
      isLoggin: true
    })
  }
  logout = () => {
    this.setState({
      isLoggin: false
    })
  }
  render() {
    if (this.state.isLoggin) {
      return (
        <div>
          <h5>Welcome Pranav</h5>
          <button onClick={this.logout}>Logout</button>

        </div>
      )
    }
    else {
      return (
        <div>
          <h5>Welcome Guest</h5>
          <button onClick={this.loginin}>Login</button>
        </div>
      )
    }
    
  }
}

export default UserGreeting