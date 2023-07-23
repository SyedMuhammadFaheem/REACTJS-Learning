import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true
    }
  }
  
  
    render() {
        
        let message=''
        
        if(this.state.isLoggedIn)
        message='Welcome Faheem'
        else
        message='Welcome Guest'
        
        // return (
        //     <div>{message}</div>
        //     )
        
        return this.state.isLoggedIn && <div>Welcome Faheem</div>
            // if (this.state.isLoggedIn)
            // {
                //     return(
                    //         <div>Welcome Faheem</div>
                    //     )
                    // }
                    // else
                    // {
                        //     return (
                            //         <div>Welcome Guest</div>
                            //     )
                            // }
                            
                            // return (
                                //   <div>
                                //     <div>Welcome Faheem</div>
                                //     <div>Welcome Guest</div>
                                //   </div>
                                // )
                                return(
                        
                                    this.state.isLoggedIn ? <div>Welcome Faheem</div> : <div>Welcome Guest</div>
                                )
                            }
                        }
                        
                        export default UserGreeting
                        