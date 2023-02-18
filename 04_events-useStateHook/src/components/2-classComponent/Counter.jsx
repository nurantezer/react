//*boilerplate cod çok fazla kalıp kod gereksiz rutin aynı şeyleri tekrar eden kodlar
//*index.js içine bootsrap i ekledim

import React from 'react'  //*burdaki {companenti} silmek için aşağı react ekledik

export class Counter extends React.Component {
constructor(props) {
  super(props)

  this.state = {
  count : 0,
  }
}
increment(){
this.setState({
    count:this.state.count + 1,
})
}
    render() {
   return (
      <div className='container text-center'>
      <h2>class components</h2>
      <h1 className='display-4'>Count:{this.state.count}</h1>
      <button onClick={this.increment} className='btn btn-sucses'>INC</button>
      <button className='btn btn-danger'>CLEAR</button>
      <button onClick={this.decrament} className='btn btn-warning'>DEC</button>
      </div>
    )
  }
}

export default Counter
