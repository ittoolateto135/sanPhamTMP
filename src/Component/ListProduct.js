import React, { Component } from 'react';
import Product from './Product';

class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sanPhamChitiet: [],
            display:false

        }
        
       
    }
    mangDienThoai = [
        {
            maSp: 'L3123', tenSp: "ViSmart live", manHinh: 'AMOLED , 6.2", Full HD+', dieuHanh: 'Android 9.0 (pie)',
            cameraTruoc: '20 MP', cameraSau: 'Chính 48 MP & Phụ 8 MP', ram: '4 GB', rom: '64 GB', giaBan: 5700000, hinhAnh: './img/vinsmart.jpg',"soLuong": 1
        },
        {
            maSp: 'L31423', tenSp: "SAM SUNG A94", manHinh: 'Dynamic AMOLED 2X, 6.9", Quad HD+ (2K+)', dieuHanh: 'Android 9.0 (pie)',
            cameraTruoc: '10 MP', cameraSau: 'Chính 32 MP & Phụ 12 MP', ram: '4 GB', rom: '32 GB', giaBan: 15700000, hinhAnh: './img/ip11.jpg',"soLuong": 1
        },  {
            maSp: 'L38123', tenSp: "IPHONE 12 PRO MAX", manHinh: 'AMOLED , 6.2", Full HD+', dieuHanh: 'Android 9.0 (pie)',
            cameraTruoc: '20 MP', cameraSau: 'Chính 48 MP & Phụ 16 MP', ram: '2 GB', rom: '256 GB', giaBan: 2200000, hinhAnh: './img/ip3.jpg',"soLuong": 1
        }
    ]
    renderListPhone = () => {
           const {themGiohang}  = this.props
        return this.mangDienThoai.map((dt, index) => {
            return (
                <div className='col-4'>
                    <Product key={index}
                        listSmart={dt}
                        xemChiTiet = {this.xemChiTiet}
                        themGiohang = {themGiohang}
                    />
                </div>
            )
        })
    }
    xemChiTiet = (sanPham) =>{  
        this.setState({
            sanPhamChitiet:sanPham,
            display:true
        })
    }
  
    render() {
        let { sanPhamChitiet } = this.state;
     
        return (
            <div className='container'>
                <div className='row'>
                    {this.renderListPhone()}
                </div>
                <div className='row' style={{display:this.state.display ? 'flex' : 'none'}}>
                    <div className='col-6'>
                        <h3>{sanPhamChitiet.tenSp}</h3>
                        <img src={sanPhamChitiet.hinhAnh} width={250} height={300} />
                    </div>
                    <div className='col-6'>
                        <h3>Thông số kỹ thuật</h3>
                        <table className='table'>
                            <tr>
                                <td>Màn hình</td>
                                <td>{sanPhamChitiet.manHinh}</td>
                            </tr>
                            <tr>
                                <td>Hệ điều hành</td>
                                <td>{sanPhamChitiet.dieuHanh}</td></tr>
                            <tr>
                                <td>Camera trước</td>
                                <td>{sanPhamChitiet.cameraTruoc}</td>
                            </tr>
                            <tr>
                                <td>Camera sau</td>
                                <td>{sanPhamChitiet.cameraSau}</td>
                                </tr>
                            <tr>
                                <td>Ram</td>
                                <td>{sanPhamChitiet.ram}</td>
                                </tr>
                            <tr>
                                <td>Rom</td>
                                <td>{sanPhamChitiet.rom}</td>
                            </tr>

                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListProduct;