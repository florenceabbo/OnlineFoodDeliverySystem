import React from "react";

import "./AboutInfo.css";
import image2 from "../../../assets/cheese.jpg";


const AboutInfo = () => {
  return (
    <div className="section">
      <div className="container grid-container">
        <div>
          <div className="about-info-content">
            <h2 className="heading-secondary">
              A few words <span>about us</span>
            </h2>

            <h4>Let us introduce ourselves</h4>

            <p>
            <div className="amazing-card amazing-card-right">
            <img src={image2} alt="cheese" className="amazing-card-image" />

            <div className="amazing-card-content">
              <div className="amazing-card-title">
              

                <h3 className="heading-tertiary">
                  <span>Feel At Home</span>
                </h3>
              </div>
            </div>
          </div>
            </p>

            <blockquote>
          Home At Heart
            </blockquote>

            <p>
             
            </p>
          </div>
        </div>

        <div>
          <div className="about-info-content">
            <h2 className="heading-secondary">
              A PLACE FOR WINE, A PLACE <span>TO DINE</span>
            </h2>

            <h4>We hope to see you soon!</h4>

            <p>
            <div className="amazing-card amazing-card-right">
            <img src={image2} alt="cheese" className="amazing-card-image" />

            <div className="amazing-card-content">
              <div className="amazing-card-title">
              

                <h3 className="heading-tertiary">
                  <span>Dine And Wine</span>
                </h3>
              </div>
            </div>
          </div>
            </p>

            <blockquote>
              Best Wine Dealers
            </blockquote>

            <p>
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
