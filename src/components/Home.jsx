import { useEffect } from "react";
import { useState } from "react"
import WebServisces from "../servisces/WebServisces";
import {useDispatch} from "react-redux"
import WebAPI from "../servisces/WebAPI"
import { addProdcut } from "../redux/CartSlice";

function Home()

{
    const dispatch=useDispatch()
  var [pData,setPData]=useState([]);
  useEffect(()=>{
         loadProducts();
  },[])

  var loadProducts =async ()=>{
    var responce= await WebServisces.getProducts(WebAPI.productAPI);
    console.log(responce);
    console.log("responce is:"+JSON.stringify(responce));
    setPData(responce.data.products);
  }





    return<div className="container">
      <h1 style={{textAlign:'center',color:"red"}}>Home Component called</h1>
        <div className="row">
          {pData.map((data,index)=>{
            console.log("data is:"+data)

            return <div className="col-md-3">
              <b><img src={data.thumbnail} height={150} width={120}
              className="img-thumbnail img-responsive"/></b>
              <br/>
              <b>id:{data.id}</b><br/>
              <b>name:{data.title}</b><br/>
              <b>brand:{data.brand}</b><br/>
              <b>price:{data.price}</b><br/>
              <b>rating:{data.rating}</b><br/>
              <b>discount:{data.discountPercentage}</b><br/>
              <button className="btn btn-danger" 
              onClick={()=>{dispatch(addProdcut(data))}}>Add to Cart</button>
              <hr/>





              </div>
            

          })}

        </div>
    </div>
}
export default Home;