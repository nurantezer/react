import React from 'react'

export class Counter extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count:0,
      }
    }

    increment = () =>{
        this.setState({
            count:this.state.count + 1,
        })
    }

    decrement = () =>{
        this.setState({
            count : this.state.count -1,
        })
    }

  render() {
    return (
      <div className='container text-center mt-4'>
        <h2 className='text-danger'>Class Components</h2>
        <h1 className='display-4'>Count:{this.state.count}</h1>
        <button className='btn btn-success' onClick={this.increment}>INC</button>
        <button className='btn btn-danger' onClick={() => this.setState({count: 0})}>CLR</button>
        <button className='btn btn-warning' onClick={this.decrement}>DEC</button>
      </div>
    )
  }
}

export default Counter