import React from 'react'
import ListItem from "../../../components/ListItem/ListItem";
import './LunchTime.css'
import image2 from "../../../assets/cheese.jpg";



const menuDataLeft = [
    {
      title: "Spiced Pigeon",
      description: "Ale & artichokes",
      price: 38,
      img: image2,
    },
    {
      title: "Ribeye Steak",
      description: "Mushroom ketchup & fries",
      price: 42,
      img: image2,
    },
    // {
    //   title: "Duck Breast",
    //   description: "Smoked confit fennel & umbles",
    //   price: 35,
    //   img: image2,
    // },
    // {
    //   title: "Roast Turbot",
    //   description: "Mussel & seaweed ketchup, salmon roe & sea rosemary",
    //   price: 22,
    //   img: image2,
    // },
  ];
  
  const menuDataRight = [
    {
      title: "Linefish",
      description: "Pan fried line fish, herbed nicola potato and mussel salad",
      price: 27,
      img: image2,
    },
    {
      title: "Autumn Lamb",
      description: "Pan seared lamb loin, slow roasted lamb shanks",
      price: 33,
      img: image2,
    },
    // {
    //   title: "Duck",
    //   description: "Confit duck leg, mushroom and liver stuffing and onions",
    //   price: 75,
    //   img: image2,
    // },
    // {
    //   title: "Homedried Tomato",
    //   description: "with sesame, aubergine puree and burnt aubergine jelly",
    //   price: 22,
    //   img: image2,
    // },
  ];

const LunchTime = () => {
  return (
    <div className='section'>
        <div className="container lunch-time">
      <h1 className="heading-secondary">
      <button>  Lunch Time </button>
      </h1>

      <div className="grid-container">
        <div>
          {menuDataLeft.map((data, i) => (
            <ListItem
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
  )
}

export default LunchTime