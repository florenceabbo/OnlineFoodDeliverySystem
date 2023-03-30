import React from "react";
import "./Beverages.css";
import ListItem from "../../../components/ListItem/ListItem";
import image1 from "../../../assets/burger.jpg";

const menuDataLeft = [
  {
    title: "7up",
    price: 3.9,
    img: image1,
  },
  {
    title: "root beer",
    price: 3.9,
    img: image1,
  },
  {
    title: "apple juice",
    price: 3.9,
    img: image1,
  },
  {
    title: "orange juice",
    price: 3.9,
    img: image1,
  },
];

const menuDataMiddle = [
  {
    title: "coke",
    price: 3.9,
    img: image1,
  },
  {
    title: "pepsi",
    price: 2.9,
    img: image1,
  },
  {
    title: "red bull",
    price: 4.9,
    img: image1,
  },
  {
    title: "bitter lemon",
    price: 2.95,
    img: image1,
  },
];

const menuDataRight = [
  {
    title: "crush",
    price: 2.7,
    img: image1,
  },
  {
    title: "crystal light",
    price: 5.9,
    img: image1,
  },
  {
    title: "banana shake",
    price: 5.9,
    img: image1,
  },
  {
    title: "pineapple shake",
    price: 7.95,
    img: image1,
  },
];

const Beverages = () => {
  return (
    <div className="section">
      <div className="container beverages">
        <h1 className="heading-secondary">
          <button>Non Alcoholic Beverages</button>
        </h1>

        <div className="grid-container">
          <div>
            {menuDataLeft.map((data, i) => (
              <ListItem
                key={i}
                title={data.title}
                description={data.description}
                price={data.price}
                itemImage={data.img}
              />
            ))}
          </div>

          <div>
            {menuDataMiddle.map((data, i) => (
              <ListItem
                key={i}
                title={data.title}
                description={data.description}
                price={data.price}
                itemImage={data.img}
              />
            ))}
          </div>

          <div>
            {menuDataRight.map((data, i) => (
              <ListItem
                key={i}
                title={data.title}
                description={data.description}
                price={data.price}
                itemImage={data.img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beverages;
