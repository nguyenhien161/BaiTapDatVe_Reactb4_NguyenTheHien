import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../store/action/BTDatVeAction";
class TTDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>{" "}
          <span
            className="text-light"
            style={{ fontSize: "25px", fontWeight: "600" }}
          >
            Ghế đã đặt
          </span>
          <br />
          <button className="gheDangChon"></button>{" "}
          <span
            className="text-light"
            style={{ fontSize: "25px", fontWeight: "600" }}
          >
            Ghế đang đặt
          </span>
          <br />
          <button className="ghe" style={{ marginLeft: 0 }}></button>{" "}
          <span
            className="text-light"
            style={{ fontSize: "25px", fontWeight: "600" }}
          >
            Ghế chưa đặt
          </span>
        </div>
        <div className="mt-5">
          <table class="table" border={2}>
            <thead>
              <tr className="text-light" style={{ fontSize: "25px" }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Hủy</th>
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe));
                        }}
                      >
                        Hủy
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BTDatVeReducer.danhSachGheDangDat,
  };
};
export default connect(mapStateToProps)(TTDatGhe);
