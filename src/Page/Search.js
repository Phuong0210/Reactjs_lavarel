import React from 'react';
import axios from 'axios';
import {useEffect, useState} from "react";
const List=()=>{
   
  const [t_restaurants,setProducts]=useState([{
      id:"",
      pro_name:"",
      description:"",
      price:"",
      image:""
  }]);  //cars là 1 mảng các đối tượng
  const [noDataFound,setNoDataFound]=useState("");
  const [search, setSearch] = useState();
 
  //gọi hàm này khi CarList được render lần đầu (chú ý tham số thứ 2 là mảng rỗng). Hàm này như hàm lifecycle componentDidMount()
  useEffect(() => {
    getProducts();
      //console.log("hello carlist");
    },[]);

  //cập nhật lại state cars
  const  getProducts=()=>{
      axios.get('http://127.0.0.1:8000/api/t_restaurants').then((res)=>{
          console.log(res.data);
          if(res.status===200){
              setProducts(res.data.data?res.data.data:[]); //c là biến tự đặt tên gì cũng đc, ko có nó thì in ra cars=[]
              console.log(res.data.data?res.data.data:[]);
              console.log(t_restaurants);//vì cars lúc này chỉ render 
          };
          if(res.data.status==="failed" && res.data.success===false){
              setNoDataFound(res.data.message);
              console.log(noDataFound);
          };
      }).catch((error)=>{
          console.log(error);
      });
  };

   
   
   const handleSearch = async (e,search) => {
    const res = await axios.get(`http://127.0.0.1:8000/api/show?search=${search}`);
    // const carList = await res.data;
 
    setProducts(res.data.data);

   }
   

        return (
            <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="searchbar">
            <input className="search_input" type="text" name="search" placeholder="Search by name..." onChange={(e) => setSearch(e.target.value)} />
            <input className="search_input" type="text" name="search" placeholder="Search by price..." onChange={(e) => setSearch(e.target.value)} />
            <button class="" type='' onClick={(e) => handleSearch(e,search)}><i className="fas fa-search" /></button>
          </div>
        </div>
        <div className='show'>
        {!!t_restaurants
                  ?
                  t_restaurants.map((rest,index)=>
                  <div key={index}>
        <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src={`http://127.0.0.1:8000/image/${rest.image}`} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Tên: {rest.pro_name}</h5>
          <h5 className="card-title">Giá: {rest.price}</h5>
          <p className="card-text">Mô tả: {rest.description}</p>
          <a href="#" className="btn btn-primary">Mua ngay</a>
        </div>
      </div>
      </div>
      )
      :
       
       <div>No data</div> }
       </div>
      </div>
        );
    

        }
export default List;