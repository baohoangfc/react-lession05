import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Item extends Component {
    to_slug = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();     
    
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
    
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
    
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
    
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');
    
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
    
        // return
        return str;
    }
    render() {
        return (
            <div className="item  col-xs-4 col-lg-4">
                <div className="thumbnail">
                    <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                    <div className="caption">
                        <h4 className="group inner list-group-item-heading">
                            {/*Tên Khóa Học */}
                            {this.props.children}
                        </h4>
                        <p className="group inner list-group-item-text">
                        Khóa học lập trình Website bằng PHP &amp; MySQL chỉ cung cấp cho bạn các kiến thức là chính.Kết thúc khóa học lập trình website PHP &amp; MySQL cơ bản chúng tôi sẽ KHÔNG cung cấp chứng chỉ cho bạn như tham gia các khóa học lập trình website bằng PHP &amp; MySQL cơ bản ở trung tâm.
                        </p>
                        <div className="row">
                        <div className="col-xs-12 col-md-8">
                            <p className="lead">
                                { this.props.price}
                            </p>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <Link className="btn btn-success" to={"chi-tiet/" + this.props.pid + "/" + this.to_slug(this.props.children) + ".html"}>Chi tiết</Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;