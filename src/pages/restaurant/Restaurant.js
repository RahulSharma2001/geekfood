import React, { useState } from "react";
import "./style.css";
import { data } from "./RestaurantData";
import RestaurantCard from "./RestaurantCard";
import Navbar from "../../components/navbar/Navbar";

const Restaurant = () => {
  const [filteredDatas, setFilteredData] = useState(data);

  function filterData(e) {
    let newData = data.filter((res) =>
      res.name.toLowerCase().includes(e.target.value)
    );
    return setFilteredData(newData);
  }

  function filterDataOnRating(e) {
    if (Number(e.target.value) === 0) {
      return setFilteredData(data);
    }
    let newData = data.filter((res) => res.rating === Number(e.target.value));
    return setFilteredData(newData);
  }
  return (
    <div className="res-container">
      <Navbar />
      <div className="sf">
        <input
          type="text"
          placeholder="Search for restaurant.."
          onChange={filterData}
        ></input>
        <label for="rating">
          Minimum Rating :
          <input
            type="number"
            id="rating"
            min="0"
            placeholder="0"
            onChange={filterDataOnRating}
          />
        </label>
      </div>
      <div className="restaurant-container">
        {filteredDatas.map((res) => (
          <RestaurantCard
            key={res._id.$oidd}
            name={res.name}
            url={res.URL}
            address={res.address}
            outcode={res.outcode}
            postcode={res.postcode}
            rating={res.rating}
            type_of_food={res.type_of_food}
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
