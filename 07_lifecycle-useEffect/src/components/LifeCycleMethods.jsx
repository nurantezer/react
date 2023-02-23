
import React from 'react'

export class LifeCycleMethods extends React.Component {
constructor(props) {
  super(props)

  this.state = {
    count: 0,
  }
}

handleInc = () => {
  this.setState({
    count: this.state.count + 1,
  })
}


  render() {
    return (
      <div className='container text-center'>
        <h1 className='text-danger'>LIFECYLE METHODS</h1>
        <h3>COUNT={this.state.count}</h3>
        <button className='btn btn-info' onClick={this.handleInc}>INC</button>

      </div>
    )
  }
}

export default LifeCycleMethods