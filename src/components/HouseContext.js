import React, { useState, useEffect, createContext } from "react";

// import data
import { housesData } from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [surface, setSurface] = useState("Surface (any)");
  const [loading, setLoading] = useState(false);

  // return all countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });

    // remove duplicates
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)]; // set() method

    // set countries state
    setCountries(uniqueCountries);
  }, [houses]);

  // return all properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    // remove duplicates
    const uniqueProperties = ["PropertyType (any)", ...new Set(allProperties)]; // set() method

    // console.log(uniqueProperties);

    // set properties state
    setProperties(uniqueProperties);
  }, [houses]);

  const handleClick = () => {
    // set loading
    setLoading(true);

    // create a function that checks if the string includes '(any)'
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    // console.log(price);

    const minPrice = parseInt(price.split(" ")[0]);
    const maxPrice = parseInt(price.split(" ")[2]);
    // console.log(minPrice, maxPrice);

    const minSurface = parseInt(surface.split(" ")[0]);
    const maxSurface = parseInt(surface.split(" ")[2]);

    // console.log(minSurface, maxSurface);

    const newHouses = housesData
      .filter((house) => {
        if (!isDefault(country)) {
          return house.country === country;
        } else {
          return true;
        }
      })
      .filter((house) => {
        if (!isDefault(property)) {
          return house.type === property;
        } else {
          return true;
        }
      })
      .filter((house) => {
        const housePrice = parseInt(house.price);
        if (!isDefault(price)) {
          return minPrice <= housePrice && housePrice <= maxPrice;
        } else {
          return true;
        }
      })
      .filter((house) => {
        const houseSurface = parseInt(house.surface.split(" ")[0]);
        if (!isDefault(price)) {
          return minSurface <= houseSurface && houseSurface <= maxSurface;
        } else {
          return true;
        }
      });

    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);

    // console.log(newHouses);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        surface,
        setSurface,
        houses,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
