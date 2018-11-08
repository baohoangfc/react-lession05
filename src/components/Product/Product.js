import React, { Component } from 'react';
import Item from './Item';
import myData from './data.json';

class Product extends Component {
    format_curency = (price) => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }
    render() {
        return (
            <div id="products" className="row list-group">
               {
                   myData.map((val,key) => {
                        return <Item pid={val.id} price={this.format_curency(val.gia)} key={key}>{val.ten}</Item>
                   })
               }
               <Item>Lập Trình PHP</Item>
            </div>

        );
    }
}

export default Product;