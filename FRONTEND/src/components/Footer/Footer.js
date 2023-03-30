import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className="section footer">
      <div className="container">
        <div className="grid-container">
          <div className="footer-grid-item">
          <h3 className="text-white"> Find Us At</h3>
            

            <p className="text-white">Kamokya</p>
            <p className="text-white">Kyanjokya Street</p>
            <p className="text-white">Bukoto street</p>
            <p className="text-white">(+256)772979732</p>
            <Link to="/About" className="text-white">
            <h3 className="color">About Us</h3>
            </Link>
          </div>

          <div className="footer-grid-item">
          <h3 className="text-white"> Find Us</h3>

            <p className="text-white"> <FacebookIcon/>   Royal Deliveries Ug</p>
            <p className="text-white"> <TwitterIcon/>   #royal Deliveries Ug</p>
            <p className="text-white"> <InstagramIcon/>  royal Deliveries Ug </p>
          
            <Link to="/Contact" className="text-white">
           <h3 className="color">Contact Us</h3>      
            </Link>
          </div>

          <div className="footer-grid-item">
            <h3 className="text-white">Breakfast</h3>
            <p className="text-white">Lunch</p>
            <p className="text-white">Dinner</p>
            <p className="text-white">Desserts</p>
            <Link to="/Menu" className="text-white">
            <h3 className="color">Menu</h3>
            </Link>
          </div>

          <div className="footer-grid-item">
            <h3 className="text-white">Meals</h3>
            <p className="text-white">Main foods</p>
            <p className="text-white">Order of the day</p>
            <p className="text-white">Menu</p>
            <Link to="/Home" className="text-white">
            <h3 className="color">Home</h3>
            </Link>
          </div>
        </div>
      </div>
      <h5 className="text-white">@copyright made by RoyalDeliveries 2023</h5>
    </div>
  );
};

export default Footer;
