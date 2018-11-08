import React, { Component } from 'react';
import myData from './../Product/data.json';
class Detail extends Component {
    format_curency = (price) => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }
    render() {

        var pid = parseInt(this.props.match.params.id,10);

        return (
            <div>
                {
                    myData.map((val,key) => {
                        if(val.id === pid){
                                return <div key={key}><h1>Tên : {val.ten}</h1>
                                <h1>Giá : {this.format_curency(val.gia)}</h1></div>
                            }
                    })
                }
                
            </div>
        );
    }
}

export default Detail;