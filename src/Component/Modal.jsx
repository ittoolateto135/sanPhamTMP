import React, { Component } from 'react';
import './Modal.css';
class Modal extends Component {
  render() {
    const { gioHang,xoaGioHang,updateSoLuong } = this.props
    return (
      <div>
        {/* Modal */}
        <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true" 
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content" style={{ maxWidth: '950px', width: '950px' }}>
              <div className="modal-header">
                <h5 className="modal-title " style={{ color: 'red', fontWeight: 'bold' }}>GIỎ HÀNG</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className='table'>
                  <thead>
                    <tr>
                      <th>MÃ SẢN PHẨM</th>
                      <th>HÌNH ẢNH</th>
                      <th>TÊN SẢN PHẨM</th>
                      <th>GIÁ BÁN</th>
                      <th>SỐ LƯỢNG</th>
                      <th>TỔNG TIỀN</th>
                      <td></td>
                    </tr>
                  </thead>
                  <tbody>
                    {gioHang.map((spGh, index) => {
                      return (
                        <tr key={index}>
                          <td>{spGh.maSp}</td>
                          <td><img src={spGh.hinhAnh} style={{ width: '60px', height: '80px' }} /></td>
                          <td>{spGh.tenSp}</td>
                          <td>{spGh.giaBan}</td>
                          <td>
                          <button className='btn btn-primary' onClick={()=>updateSoLuong(spGh.maSp,true)}>+</button>
                          {spGh.soLuong} 
                          <button className='btn btn-primary' onClick={()=>updateSoLuong(spGh.maSp,false)}>-</button>
                          </td>
                          <td>{spGh.giaBan * spGh.soLuong}</td>
                          <td><button className='btn btn-danger' onClick={()=>xoaGioHang(spGh.maSp)}>Xóa</button></td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                {/* <button type="button" className="btn btn-primary">Save</button> */}
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default Modal;