import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addProduct } from "../../src/features/item/itemSlice";
import { useParams } from "react-router-dom";
// import { Rating } from 'react-simple-star-rating';
import "../styles/itemDetails.css";

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [quantity,setQuantity] =useState(1)
  const [count,setCount] =useState(1)
  const { title, price, description, image, category,rate } = item;
  const stateItem = useSelector((state) => state.item);

  const dispatch =useDispatch()


  const getDataItem = async () => {
    const url = `https://fakestoreapi.com/products/${id}`;
    const data = await fetch(url);
    const res = await data.json();
    setItem(res);
  };
  const getQuantity=(e)=>{
      setQuantity (Number(e.target.value))
      setCount(Number(e.target.value))

  }
  const AddNow =()=>{
    dispatch(addProduct({item, quantity}))
    const newArray = stateItem.map(item=> console.log(item))
    console.log(newArray);
  }
  useEffect(() => {
    getDataItem();
  }, []);
  return (
    <div className="p-4">
      <div className="card  col-md-4 w-100  ">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-6">
            <div className="card-body d-flex  flex-column justify-content-center">
              <p className="card-text">
                <span>{category}</span>.
              </p>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}.</p>

              {quantity > 1 ? (
                <p className="card-text">${price * quantity} </p>
              ) : (
                <p className="card-text">${price}</p>
              )}
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
            <div className=" row-md-2 d-flex justify-content-around">
              <div className="card_input_count">
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={count}
                  onChange={getQuantity}
                  style={{ width: "70px" }}
                />
              </div>

              <div className="card-buttons d-flex  col-md-6 gap-4  ">
                <div className="card-button_buy">
                  <button className="btn btn-primary ">Buy now</button>
                </div>
                <div className="card-button_Add ">
                  <button className="btn btn-primary" onClick={AddNow}>Add now </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
