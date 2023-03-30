import React from "react";

import "./CoffeeSelection.css";

import ListItem from "../../../components/ListItem/ListItem";
import coffeeImage from "../../../assets/coffee-items.jpg";
import image1 from "../../../assets/burger.jpg";


const menuDataRight = [
  {
    title: "Low Carb CoffeeSelection",
    description: "grilled chicken breast with veggies",
    price: 13,
    img: image1,

  },
  {
    title: "Bagel",
    description: "with salmon, cream cheese and salsa",
    price: 8.5,
    img: image1,
  },
  {
    title: "American Pancakes",
    description: "with chocolate  sauce or maple syrup, honey and cream",
    price: 21,
    img: image1,
  },
  {
    title: "Low Carb CoffeeSelection",
    description: "grilled chicken breast with veggies",
    price: 13,
    img: image1,
  },
  {
    title: "Bagel",
    description: "with salmon, cream cheese and salsa",
    price: 8.5,
    img: image1,
  },
  // {
  //   title: "American Pancakes",
  //   description: "with chocolate  sauce or maple syrup, honey and cream",
  //   price: 21,
  // },
  // {
  //   title: "Low Carb CoffeeSelection",
  //   description: "grilled chicken breast with veggies",
  //   price: 13,
  // },
];

const CoffeeSelection = () => {
  return (
    <div className="container coffee-selection">
      <h1 className="heading-secondary">
       <button> coffee Selection </button>
      </h1>

      <div className="grid-container">
        <div>
          <img src={coffeeImage} alt="coffee items" className="coffee" />
        </div>

        <div>
          {menuDataRight.map((data, i) => (
            <ListItem
              title={data.title}
              description={data.description}
              price={data.price}
              itemImage={data.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoffeeSelection;
