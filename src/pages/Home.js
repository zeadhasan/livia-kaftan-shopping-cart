import React from "react";
import Cards from "../component/Cards";
import "./Home.css";
import data from "../backend/Data";

const Home = () => {
  return (
    <div className="container-fluid">
      <h3 className="home-head">Livia Kaftan Shop Page</h3>
      <div className="container py-5">
        <div className="row">
          {data.products.map((item, index) => {
            return (
              <Cards
                key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
