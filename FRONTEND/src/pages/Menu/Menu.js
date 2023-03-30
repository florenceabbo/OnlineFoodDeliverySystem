import React ,{useState,useEffect}from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/coffee.jpg";
import MenuOfTheDay from "./MenuOfTheDay/MenuOfTheDay";
import Breakfast from './Breakfast/Breakfast'
import LunchTime from "./LunchTime/LunchTime";
import CoffeeSelection from './CoffeeSelection/CoffeeSelection'
import Beverages from './Beverages/Beverages'


const Menu = () => {
  const [menuOfTheDay,setMenuOfTheDay] =useState([]);








  useEffect(() => {
    fetch ('http://127.0.0.1:5000/food_categories/',{
          'methods':'GET'
    })
    .then(resp => resp.json())
    .then(resp =>console.log(resp))
  
  },[]);

  
  

  return (
    <div>
      <HeroImage
        bgImage={bgImage}
        heading={["Our ", <span>Menu</span>]}
        text="Everything we have to offer at one glance"
      />
      <MenuOfTheDay />
      <Breakfast />
      <LunchTime />
      <CoffeeSelection />
      <Beverages />
    </div>
  );
};

export default Menu;
