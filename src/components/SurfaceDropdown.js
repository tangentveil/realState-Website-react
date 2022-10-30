import React, { useEffect, useState, useContext } from "react";

// import icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

import { BiArea } from "react-icons/bi";

// import headless ui
import { Menu } from "@headlessui/react";

import { HouseContext } from "./HouseContext";

const SurfaceDropdown = () => {
  const { surface, setSurface } = useContext(HouseContext);

  // console.log(countries);

  const [isOpen, setIsOpen] = useState(false);

  const surfaces = [
    {
      value: "Surface (any)",
    },
    {
      value: "1000 - 2000",
    },
    {
      value: "2000 - 3000",
    },
    {
      value: "3000 - 4000",
    },
    {
      value: "4000 - 7000",
    },
  ];

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <BiArea className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{surface}</div>
          <div className="text-[13px]">Select Surface</div>
        </div>

        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {surfaces.map((surface, index) => {
          return (
            <Menu.Item
              onClick={() => setSurface(surface.value)}
              as="li"
              key={index}
              className="cursor-pointer hover:text-violet-700 transition"
            >
              {surface.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default SurfaceDropdown;
