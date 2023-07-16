import React,{Component} from "react";

class GreetPropClass extends Component{
    render()
    {
        // return <h1>Hello {this.props.name}</h1>
        return <h1>Hello {this.props.children}</h1>
    }
};
export default GreetPropClass