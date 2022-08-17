import React, {Component} from 'react';
import classes from './App.module.css';
import ProductData from './components/ProductData';


import ProductDetails from './components/ProductDetails';
import ProductPreview from './components/ProductPreview';
import TopBar from './components/TopBar';



class App extends Component 
{

  state={
    productData: ProductData,
    currentPreviewImagePos:0,
    showHeartBeatSection:true
  }

  onColorOptionClick= (pos) =>
  {
    
    this.setState({currentPreviewImagePos: pos});
  }

  onFeatureItemClick= (pos) =>
  {
    let updatedState;
    if(pos===1) 
    updatedState=true;
    else
    updatedState=false;
    this.setState({showHeartBeatSection: updatedState})
  }

  render()
  {
    return (
      <div className="App">
        <TopBar/>
        <div className={classes.MainContainer}>
          <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} showHeartBeatSection={this.state.showHeartBeatSection}/>
          <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} currentPreviewImagePos={this.state.currentPreviewImagePos} onFeatureItemClick={this.onFeatureItemClick} showHeartBeatSection={this.state.showHeartBeatSection}/>
        </div> 
      </div>
    );
  }  
  
}

export default App;
