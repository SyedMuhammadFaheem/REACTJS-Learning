import React,{Component} from "react";

class Message extends Component
{
    constructor()
    {
        super()
        this.state={
            message:'Welcome Visitor'
        }
    }
    change()
    {
        this.setState((prevState)=>({
            message: prevState.message==='Welcome Visitor' ? 'Thankyou for subscribing!' : 'Welcome Visitor'
        }))
    }

    render(){
        return (
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.change()}>Subscribe</button>
        </div>
        )
    }
};

export default Message;