import React, { Component } from "react";
import {linkData} from './linkData';
// import {socialData} from './socialData';

const ProductContext = React.createContext();
//Provider
//Consumer
class ProductProvider extends Component {
  state = {
    dropDownMenu:false,
    links: linkData
    // maps to component socialData.js
    
  }

  // dropdown menu
  handleDownMenu = () => {
    this.setState({dropDownMenu: !this.state.dropDownMenu});
  }


  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state, 
          handleDownMenu: this.handleDownMenu
        }}>
        {this.props.children}
      </ ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };