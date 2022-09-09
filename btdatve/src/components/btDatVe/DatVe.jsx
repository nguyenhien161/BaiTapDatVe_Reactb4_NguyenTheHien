import React, { Component } from "react";
import "./DatVeBooking.css";
import TTDatGhe from "./TTDatGhe";
import data from "./danhSachGhe.json";
import HangGhe from "./HangGhe";
export default class DatVe extends Component {
  renderHangGhe = () => {
    return data.map((hangGhe, index) => {
      return (
        <div style={{ fontWeight: 700, fontSize: 20 }} key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };
  render() {
    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url(./img/bgmovie.jpg)",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.7)",
            position: "fixed",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center" style={{ width: "100%" }}>
                <h6
                  className="text-warning"
                  style={{ fontWeight: "700", fontSize: "25px" }}
                >
                  ĐẶT VÉ XEM PHIM CYBERLEARN.VN
                </h6>
                <div
                  className="mt-2  text-light"
                  style={{ fontSize: "15px", fontWeight: "700" }}
                >
                  Màn hình
                </div>
                <div
                  className="mt-2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen"></div>
                </div>
                {this.renderHangGhe()}
              </div>
              <div className="col-4">
                <div
                  className="mt-5 text-light"
                  style={{ fontSize: "25px", fontWeight: "700" }}
                >
                  DANH SÁCH GHẾ BẠN CHỌN
                </div>
                <TTDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
