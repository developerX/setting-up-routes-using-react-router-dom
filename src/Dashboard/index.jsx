import React, { Component } from 'react'

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Hi I am the dashboard {this.props.match.params.color}</h1>
      </div>
    )
  }
}

export default Dashboard