import React, { Component } from 'react';

class Product extends Component {

    render() {
        let {listSmart,xemChiTiet,themGiohang} = this.props;
            return (
            <div className='container'>
                <div className="" style={{ width: '17rem' }}>
                    <img className="card-img-top" src={listSmart.hinhAnh} />
                    <div className="card-body">
                        <h4 className="card-title" style={{color:'#442'}}>{listSmart.tenSp}</h4>
                        <p className="card-text">Giá: {listSmart.giaBan} VNĐ</p>
                        <button type ='button' className='btn btn-outline-danger btn-sm' onClick={()=>themGiohang(listSmart)}>Them gio hang</button>
                        <button type ='button' className='btn btn-outline-success btn-sm' onClick={()=>xemChiTiet(listSmart)} >Chi tiết</button>
                    </div>

                </div>
            </div>

        );
    }
}

export default Product;