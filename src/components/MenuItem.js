import React from "react";
// import { MenuContext } from "../redux/menucontext";
import "./MenuItem.css";

const MenuItem = (props) => {
    const { id,name,image,price } = props.item;
    // const {addToCart, cartItems} = useContext(MenuContext);

    // const cartItemCount = cartItems[id];

  

  return (
    <div className="single-item">
      <div className="item-img">
        <img src={image} alt="" className="w-100" />
      </div>

      <div className="item-content">
        <div className="rating text-center">
          <span><i class="ri-star-s-fill"></i></span>
          <span><i class="ri-star-s-fill"></i></span>
          <span><i class="ri-star-s-fill"></i></span>
          <span><i class="ri-star-s-fill"></i></span>
          <span><i class="ri-star-s-fill"></i></span>
        </div>

        <h5 className="name">{name}</h5>

        <div className=" d-flex align-items-center justify-content-between">
          <span className="price d-flex align-items-center">
            {" "}
            Price:UGX<span className="price1">{price}</span>
          </span>
          {/* <button className="addToCart" onClick={() => addToCart(id)}>
            Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
          </button>  */}
          <span className="shopping__icon">
            <i class="ri-shopping-cart-line"></i>
          </span>
        </div>
      </div>
    </div>
  );
};
export default MenuItem;

