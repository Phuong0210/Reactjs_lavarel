import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const Quantity = () => {
  const [quantity, setQuantity] = useState();
  const getQuantity = () => {
    axios
      .get("http://127.0.0.1:8000/api/category_id")
      .then(function (res) {
        setQuantity(res.data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
  useEffect(() => {
    getQuantity();
  }, []);
  return (
    <div>
      <div>
      <div>
        <h3 className="">BẢNG THỐNG KÊ SỐ LƯỢNG MÓN ĂN THEO LOẠI</h3>
      </div>
        <table className="table table-bordered">
          <thead >
            <tr>
            <th>Category_id</th>
              <th>Category_name</th>
              <th >Quantity</th>
            </tr>
          </thead>
          <tbody>
            {!!quantity ? (
              quantity.map((qua, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{qua.pro_name}</td>
                  <td>{qua.quantity}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No data for displaying</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Quantity;