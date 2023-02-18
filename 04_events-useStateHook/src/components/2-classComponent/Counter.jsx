//*boilerplate cod çok fazla kalıp kod gereksiz rutin aynı şeyleri tekrar eden kodlar
//*index.js içine bootsrap i ekledim

import React from 'react'  //*burdaki {companenti} silmek için aşağı react ekledik

export class Counter extends React.Component {
  render() {
    return (
      <div className='container text-center'>
      <h2>class components</h2>
      <h1 className='display-4'>Count:0</h1>
      <button className='btn btn-sucses'>INC</button>
      <button className='btn btn-danger'>CLEAR</button>
      <button className='btn btn-warning'>DEC</button>
      </div>
    )
  }
}

export default Counter
