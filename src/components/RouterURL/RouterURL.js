import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import Product from '../Product/Product';
import Detail from '../Detail/Detail';

class RouterURL extends Component {
    render() {
        return (
               <div>
                   <Switch> {/*Dùng Swith để đưa đúng đường dẫn không bị dư thừa */}
                        <Route path="/" exact component={Home} />
                        <Route path="/lien-he/" component={Contact} />
                        <Route path="/san-pham/" component={Product} />
                        <Route path="/chi-tiet/:id/:slug.html" component={Detail} />
                        {/*Nếu đường dẫn bị sai thì bỏ luôn path */}
                        <Route component={Home} />
                    </Switch>
               </div>
        );
    }
}

export default RouterURL;