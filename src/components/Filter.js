import React, { Component } from 'react';
import { connect } from 'react-redux';
import {filterProducts,sortProducts} from "../actions/productActions";

 class Filter extends Component {
    render()
    {
        return !this.props.filteredProducts ? (
            <div>Loading..</div>
            ):(
            <div className="filter">
            <div className="filter-result">
                {this.props.filteredProducts.length} Products
            </div>
            <div className="filter-sort">
                
                Order {" "}
                <select value={this.props.sort}
                 onChange={(e) => 
                 this.props.sortProducts
                 (this.props.filteredProducts,
                 e.target.value
                 )
                 }
                 >
                    
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
                </div>
            <div className="filter-size">
                Filter{" "}
             <select value={this.props.size} onChange={(e)=>
                this.props.filterProducts(this.props.products,e.target.value)}>
            <option value=""> ALL </option>
            <option value="Chocolate"> Chocolates</option>
            <option value="Eggs"> Eggs </option>
            <option value="Milk"> Milk </option>
            <option value="Biscuit"> Biscuits</option>
            <option value="vegetables"> Vegetables</option>
            <option value="fruits"> Fruits</option>
            <option value="Beverage"> Beverage</option>
             </select></div>
           
            </div>
            
          );
    }
}
export default connect(
    (state) => ({
        size: state.products.size,
      sort: state.products.sort,
      products: state.products.items,
      filteredProducts: state.products.filteredItems,
    }),
    {
      filterProducts,
      sortProducts,
    }
  )(Filter);