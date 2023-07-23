import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName:"Parent"
      }

      this.greetParent=this.greetParent.bind(this)
    }

    greetParent(...childParams){
        alert(`Hello ${this.state.parentName} from ${childParams[0]}`)
    }
    
  render() {
    return (
      <div>
        <ChildComponent caller={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent
