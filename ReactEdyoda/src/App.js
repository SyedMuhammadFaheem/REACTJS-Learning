import React from 'react';
import './App.css';

import BlogCard from './components/BlogCard';

import {isArrayEmpty as empty} from './components/Utils';

import {Component} from 'react';

class App extends Component {

  
  // const firstName="John";
  // const lastName="Wick";
  // const age=32;
  // const job="Team Principal";
  // const getFullName=(firstName,lastName)=>`${firstName} ${lastName}`
  // const inputPlaceHolder="Enter your details";
  // const detailsInputBox=<input placeholder={inputPlaceHolder} autoComplete/>
  // const myArr=[1,2,3,4]
  // const myObj={
  //   age:20,
  // }

  blogArr=[
    {
      id:1,
      title:"Blog Title 1",
      description:"lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar"
    },
    
    {
      id:2,
      title:"Blog Title 2",
      description:"lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar"
    },
    
    {
      id:3,
      title:"Blog Title 3",
      description:"lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar"
    }
]

  state={
    showBlogs:true,
    btnLabel:'Hide List'
  }

  blogCards = empty(this.blogArr) ? [] : this.blogArr.map((items,pos)=> {
    console.log(items);
    return (
      <BlogCard key={pos} title={items.title} description={items.description} id={items.id}/>
    );
  })
  

  onHideBtnClick=()=>
  {
    this.setState((prevState,prevProps)=>{
      return {showBlogs: !prevState.showBlogs}
    });
    if(!this.state.showBlogs)
    this.setState({btnLabel: 'Hide List'});
    else
    this.setState({btnLabel: 'Show List'});
  }


  render()
  {
    return (
      <div className="App">
        <button onClick={this.onHideBtnClick}>{this.state.btnLabel}</button>
        <br/>
        {
          this.state.showBlogs ? this.blogCards : null
        }
        
        {/* <h1>Full Name: {getFullName(firstName,lastName)}</h1>
        <p>Age: {age}</p>
        <p>Job: {job}</p>
        {detailsInputBox}
        <br/>
        {myArr[0]}
        <br/>
        <p>My age is: {myObj.age}</p>
        <br/>
        {
          myArr[0]? "true" : "false"
        }
        <br/> */}
  
      </div>
    );
  }
  
}

export default App;
