import React from "react";
import Layout from "./../components/Layout/Layout";
// import { Link } from "react-router-dom";
// import Banner from "../images/banner.jpeg";
import {Container} from 'reactstrap'
import Slider from 'react-slick'
import sliderData from '../assets/fake-data/slider'
import "../styles/HomeStyles.css";
import { Link } from "react-router-dom";

const Home = () => {
   

const settings = {
    infinite: true,
    Speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000

  }

  return (
    <Layout>

    <section>
      <Container>

        <Slider {...settings}>
          {
            sliderData.map(item => (
              <div key={item.id}>
                <div className='slider_wrapper d-flex align-items-center justify-content-between pt-5  '>
                  <div className='slider_content w-50 pt-5'>
                    <h2 className='mb-3'>{item.title}</h2>
                    <p>{item.desc}</p>
                    {/* <button className="btns">Explore Food</button> */}
                    <Link to="/menu">
            <button className="btns">ORDER NOW</button>
          </Link> 
                  </div>
                  <div className='slider_img w-200 pt-5'>
                    <img src={item.imgUrl} className="w-200" alt='' />
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
      </Container>
    </section>
    </Layout>
      
      );
    };      


















      







        
          {/* <h1>Food Website</h1>
          <p>Best Food In Uganda</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link> */}
       



export default Home;
