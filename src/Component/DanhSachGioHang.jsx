import React, { Component } from 'react';
import ListProduct from './ListProduct';
import Modal from './Modal'
import Product from './Product';
class DanhSachGioHang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gioHang: []
        }
    }
    themGiohang = (sanPhamChon)=>{
        let spGioHang = {
            maSp : sanPhamChon.maSp,
            tenSp : sanPhamChon.tenSp,
            giaBan : sanPhamChon.giaBan,
            hinhAnh : sanPhamChon.hinhAnh,
            soLuong : sanPhamChon.soLuong
        }
        // tao obj sp = tham so sp truyên vào (sanPhamChon)
        let updateGioHang = [...this.state.gioHang]
        // tạo 1 mảng sp đẻ update lại dùng restparam
        let i = updateGioHang.findIndex(e=> e.maSp === spGioHang.maSp
        )
        // trả về chỉ sso của sp đó trong mảng obj
        if(i !== -1){
            updateGioHang[i].soLuong += 1;
        }
        // nếu tồn tại thì cộng dồn số lượng n lên
        else {updateGioHang.push(spGioHang)} // k tồn tại thì thêm vào giỏ  
      this.setState({
          gioHang: updateGioHang //setState giỏ lại
      })
    }
    xoaGioHang = (maSp) =>{
        //tìm sp có mã trùng nhau trong list product r xóa đó sau đo update lại
    // let gioHangUpdate =[...this.state.gioHang];
    // let index = gioHangUpdate.findIndex(sp=>sp.maSp === sanPham.maSp);
    // if(index !== -1){
    //     gioHangUpdate.splice(index,1);
    // }
    let gioHangUpdate = this.state.gioHang.filter(sp => sp.maSp !==maSp);
    // cach naypro hon. ham filter trả về 1 mảng mới từ biểu thức của es6 cụ thể ở đây là trả ra 1 mảng sản phẩm mà k có sp click xóa
   this.setState({ gioHang: gioHangUpdate})
    }

    updateSoLuong = (maSp,tangGiam) => {
        let gioHangUpdate =[...this.state.gioHang] 
        let index = gioHangUpdate.findIndex(sp=>sp.maSp === maSp); // tim vitri san pham
        if(tangGiam){
            gioHangUpdate[index].soLuong += 1; // neu true thi + sp len 1
        }else{
            if(gioHangUpdate[index].soLuong>1){ //neu false && soLuong > 1 thi ms - sp 1
                gioHangUpdate[index].soLuong -=1;
            }
        }
        //update value and render
        this.setState({ gioHang: gioHangUpdate})
    }
    render() {
        // tinh tong soluong sp trong gio hang
        let tongSoLuong = this.state.gioHang.reduce((sl,sp,indx)=>{
                return sl+= sp.soLuong;
        },0)
        return (
            <div>
                <div className='text-right'><span className='text-danger' style={{ cursor: 'pointer', fontSize: '17', fontWeight: 'bold' }}
                 data-toggle="modal" data-target="#modelId">Giỏ Hàng ({tongSoLuong}) </span></div>
                <Modal gioHang={this.state.gioHang}  xoaGioHang ={this.xoaGioHang} updateSoLuong={this.updateSoLuong}/>
                <ListProduct themGiohang = {this.themGiohang}
               />
            </div>
        );
    }
}

export default DanhSachGioHang;