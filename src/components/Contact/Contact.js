import React, { Component } from 'react';
import {Prompt, Redirect} from "react-router-dom";

const subject = [
    "PHP",
    "ASP",
    "Swift",
    "Android"
];

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isBlocking : false,
            isRedirect : false,
            txtName : '',
            txtEmail : '',
            txtPhone : '',
            txtMessage : '',
            sltCity : '',
            rdoGioiTinh : 1,
            chkSubject : new Set(),
            file : ''
        };
    }

    checkboxSubject = () => {
        const monhoc =  subject.map((value, key) => {
            return  <label checked={this.state.chkSubject.has(value)} key={key} name="checkboxSubject" onChange={() => this.checkedSubject(value)} className="checkbox-inline"><input type="checkbox" value={value.subject} /> {value} </label>
        });

        return monhoc;
    }

    componentWillMount() {
        this.checkedCheckbox = new Set();
        // Set giống như mảng và lưu giá trị lại
    }

    checkedSubject = (monhoc) => {
        if(this.checkedCheckbox.has(monhoc)){
            this.checkedCheckbox.delete(monhoc);
            // nếu có rồi thì xóa để không trùng
        } else {
            this.checkedCheckbox.add(monhoc);
            // nếu chưa có thì thêm vào
        }

        this.setState({
            chkSubject : this.checkedCheckbox
        });

        console.log(this.state.chkSubject);

    }

    isInputChange = (event) => {
        const target = event.target;
        
        const value = target.value;
        const name = target.name;
        console.log(name);
        this.setState({
            isBlocking: target.value.length > 0,
            /*Chiều dài value trong ô input > 0 thì có thay đổi */
            [name] : value /*[name] lấy ra từ các ô input  */
        });
    }

    isFileChange = (event) => {
        this.setState({
            file : event.target.file
        });
    }
    
    onSubmitForm = (event) => {
        event.preventDefault();
        event.target.reset();
        this.setState({
            isBlocking : false, /*Có muốn chuyển trang không khi có dữ liệu*/
            isRedirect : false /*Chuyển trang khi submit Form đang có dữ liệu */
        });

        var mhoc = '';
        for(const mh of this.state.chkSubject){
            mhoc += mh;
        }

        var content = '';
        content += 'Họ Tên : ' + this.state.txtName;
        content += 'Mail : ' + this.state.txtEmail;
        content += 'Họ Tên : ' + this.state.txtPhone;
        content += 'Sex : ' + this.state.rdoGioiTinh;
        content += 'Sex : ' + mhoc;
        content += 'Sex : ' + this.state.file;

        console.log(content);

    }

    render() {

        if (this.state.isRedirect){
            return (<Redirect to={"/trang-chu"} />)
        } 
        return (
            <div>
                <Prompt when={this.state.isBlocking}  message={location =>  `Bạn Muốn Chuyển Trang ?`}/>
                <div className="well well-sm">
                    <h3><strong>Liên Hệ</strong></h3>
                </div>
                <div className="row">
                    <div className="col-md-7">
                    <iframe title="This is a unique title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.394558614363!2d106.67738851480082!3d10.781062492318384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f28f4044ddd%3A0x48b88917406c3156!2zUXXhu5FjIFR14bqlbiAtIMSQw6BvIFThuqFvIEzhuq1wIFRyw6xuaA!5e0!3m2!1svi!2s!4v1457887522959" width="100%" height={315} frameBorder={0} style={{border: 0}} allowFullScreen />
                    </div>
                    <div className="col-md-5">
                    <h4><strong>Get in Touch</strong></h4>
                    <form onSubmit={(e) => {this.onSubmitForm(e)}}>
                        <div className="form-group">
                        <input value={this.state.txtName} name="txtName" onChange={(event) => {this.isInputChange(event)}} type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="form-group">
                        <input value={this.state.txtEmail} name="txtEmail" onChange={(event) => {this.isInputChange(event)}} type="email" className="form-control" placeholder="E-mail" />
                        </div>
                        <div className="form-group">
                        <input value={this.state.txtPhone} name="txtPhone" onChange={(event) => {this.isInputChange(event)}} type="tel" className="form-control" placeholder="Phone" />
                        </div>
                        <div className="form-group">
                        <textarea defaultValue={this.state.txtMessage} name="txtMessage" onChange={(event) => {this.isInputChange(event)}} className="form-control" rows={3} placeholder="Message" />
                        </div>
                        <div className="form-group">
                        <div className="form-group">
                        <select value={this.state.sltCity} name="sltCity" className="form-control" onChange={(event) => {this.isInputChange(event)}}>
                            <option value="">Vui lòng chọn thành phố</option>
                            <option value="hn">Hà Nội</option>
                            <option value="dn">Đà Nẵng</option>
                            <option value="hcm">Hồ Chí Minh</option>
                        </select>
                        </div>
                        <div className="form-group">
                            {this.checkboxSubject()}
                        </div>
                        <div className="form-group">
                            <label className="radio-inline"><input type="radio" name="rdoGioiTinh" onChange={(event) => {this.isInputChange(event)}} checked={parseInt(this.state.rdoGioiTinh) === 1} value="1" />Nam</label>
                            <label className="radio-inline"><input type="radio" name="rdoGioiTinh" onChange={(event) => {this.isInputChange(event)}} checked={parseInt(this.state.rdoGioiTinh) === 2} value="2" />Nữ</label>
                        </div>
                        <div className="form-group">
                            <label className="custom-file">
                                <input onChange={(event) => this.isFileChange(event)} name="fAvatar" type="file" id="file" className="custom-file-input" />
                                <span className="custom-file-control"></span>
                            </label>
                        </div>
                        </div>
                        <button className="btn btn-default" type="submit" name="button">
                        <i className="fa fa-paper-plane-o" aria-hidden="true" /> Submit
                        </button>
                    </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default Contact;