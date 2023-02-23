
import React from 'react'

export class LifeCycleMethods extends React.Component {
  //!1-) Bir componentin olusturulmasında cagrılır
constructor(props) {
  console.log("1- Constructor running")
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

//!3-) Bir componet DOM ağacına eklendiğinde calıstırır.
//!(ilk render sonrası)
//!Her yasam dongusu için bir kere calisir
componentDidMount() {
  console.log("3-componenddidmount")
}

  render() {
    //! 2-) Her bir state ya da prop degistiginde (render) cagrilir
    console.log("2-Rendered")
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