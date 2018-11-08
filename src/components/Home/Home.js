import React, { Component } from 'react';
import Course from './Course';

class Home extends Component {
    render() {
        return (
            <div className="row row-offcanvas row-offcanvas-right">
                <div className="col-xs-12 col-sm-9">
                    <p className="pull-right visible-xs">
                    <button type="button" className="btn btn-primary btn-xs" data-toggle="offcanvas">Toggle nav</button>
                    </p>
                    <div className="jumbotron">
                        <h1>QuocTuan.Info</h1>
                        <p>Khóa học lập trình ReactJS tại QuocTuan.Info.</p>
                    </div>
                    <div className="row">
                        {/*******Course*****/}
                        <Course>Lập trình PHP</Course>
                        <Course>Lập Trình ASP</Course>
                        <Course>Lập Trình Java</Course>
                        <Course>Lập Trình Python</Course>
                        <Course>Lập Trình Android</Course>
                        <Course>Lập Trình Angular</Course>                  
                    </div>
                    {/*/row*/}
                </div>
                {/*/.col-xs-12.col-sm-9*/}
                <div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
                    <div className="list-group">
                        <a href="" className="list-group-item active">Link</a>
                        <a href="" className="list-group-item">Link</a>
                        <a href="" className="list-group-item">Link</a>
                        <a href="" className="list-group-item">Link</a>
                        <a href="" className="list-group-item">Link</a>
                        <a href="" className="list-group-item">Link</a>
                        <a href="" className="list-group-item">Link</a>
                        <a href="" className="list-group-item">Link</a>
                        <a href="" className="list-group-item">Link</a>
                        <a href="" className="list-group-item">Link</a>
                    </div>
                </div>
            </div>

        );
    }
}

export default Home;