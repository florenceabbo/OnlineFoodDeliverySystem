import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "reactstrap";
import MenuItem from "../components/MenuItem";
import {fastFoods,continentalfoods,desserts,beverages} from "../components/MenuList";
import "./menu.css";

const Menu = () => {
  const [filter, setFilter] = useState("FAST-FOODS");
  const [MenuList, setMenuList] = useState(fastFoods);


  useEffect(() => {

    if (filter === "FAST-FOODS") {
      setMenuList(fastFoods);
    }
    if (filter === "CONTINENTAL-FOODS") {
      setMenuList(continentalfoods);
    }

    if (filter === "DESSERTS") {
      setMenuList(desserts);
    }

    if (filter === "BEVERAGES") {
      setMenuList(beverages);
    }

  }, [filter]);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-4">
            <h2 className="menu__title">Welcome To Our Menu</h2>
          </Col>
          <Col lg="12" className="text-center mb-5">
            <button
              className={`filter-btn ${
                filter === "FAST-FOODS" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("FAST-FOODS")}
            >
              Fast Foods
            </button>
            <button
              className={`filter-btn ${
                filter === "CONTINENTAL-FOODS" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("CONTINENTAL-FOODS")}
            >
              Continental Foods
            </button>
            <button
              className={`filter-btn ${
                filter === "DESSERTS" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("DESSERTS")}
            >
              Desserts
            </button>
            <button
              className={`filter-btn ${
                filter === "BEVERAGES" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("BEVERAGES")}
            >
              Beverages
            </button>
          </Col>
          {MenuList.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                {" "}
                <MenuItem item={item} />
                
              </Col>
            )
          )};
        </Row>
      </Container>
    </section>
  )
};

export default Menu;













