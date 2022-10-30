import React, { useState, useContext } from "react";

// import icons
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiWallet3Line,
} from "react-icons/ri";

// import headless ui
import { Menu } from "@headlessui/react";

import { HouseContext } from "./HouseContext";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);

  // console.log(countries);

  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: "Price range (any)",
    },
    {
      value: "0 - 250000",
    },
    {
      value: "250001 - 500000",
    },
    {
      value: "500001 - 750000",
    },
    {
      value: "750001 - 999999",
    },
  ];

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{price}</div>
          <div className="text-[13px]">Choose price range</div>
        </div>

        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {prices.map((price, index) => {
          return (
            <Menu.Item
              onClick={() => setPrice(price.value)}
              as="li"
              key={index}
              className="cursor-pointer hover:text-violet-700 transition"
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
