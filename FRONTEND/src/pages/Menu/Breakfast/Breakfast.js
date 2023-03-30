import React from "react";
import image2 from "../../../assets/cheese.jpg";

import "./Breakfast.css";
import ListItem from "../../../components/ListItem/ListItem";

const menuDataLeft = [
  {
    title: "Eggs Benedict",
    description: "with either bacon or salmon",
    price: "21",
    image:image2,
  },
  {
    title: "Enfold’s famous Crepes",
    description: "with fresh fruit, bacon and maple syrup",
    price: "16",
    image:image2,
  },
  {
    title: "French Toasted Brioche",
    description:
      "with grilled banana, bacon, rosewater mascarpone and maple syrup",
    price: "17",
    image:image2,
  },
];

const menuDataRight = [
  {
    title: "Low Carb Breakfast",
    description: "grilled chicken breast with veggies",
    price: 13,
    image:image2,
  },
  {
    title: "Bagel",
    description: "with salmon, cream cheese and salsa",
    price: 8.5,
    image:image2,
  },
  {
    title: "American Pancakes",
    description: "with chocolate  sauce or maple syrup, honey and cream",
    price: 21,
    image:image2,
  },
];

const Breakfast = () => {
  return (
    <div className="container breakfast">
      <h1 className="heading-secondary">
       <button> breakfast </button>
      </h1>

      <div className="grid-container">
        <div>
          {menuDataLeft.map((data, i) => (
            <ListItem
              title={data.title}
              description={data.description}
              price={data.price}
              itemImage={data.image}

            />
          ))}
        </div>

        <div>
          {menuDataRight.map((data, i) => (
            <ListItem
              title={data.title}
              description={data.description}
              price={data.price}
              itemImage={data.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breakfast;
