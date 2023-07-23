import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message:'Hello'
    }

    this.clickHandler= this.clickHandler.bind(this)
  }

    clickHandler()
    {
        this.setState({
            message:'Goodbye'
        })
    }

    // clickHandler=()=>{
    //   this.setState({
    //     message:'Goodbye'
    //   })
    // }
    render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click Me</button> */}
        {/* <button onClick={()=>this.clickHandler()}>Click Me</button> */}
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default EventBind
