import React from "react";
import { Dropdown } from "flowbite-react";
export default function Menu() {
  return (
    <>
      <Dropdown inline label="Categories" className="w-56 mx-8 bg-lime-500">
        <Dropdown.Item className="text-white">Dashboard</Dropdown.Item>
        <Dropdown.Item className="text-white">Settings</Dropdown.Item>
        <Dropdown.Item className="text-white">Earnings</Dropdown.Item>
        <Dropdown.Item className="text-white">Sign out</Dropdown.Item>
      </Dropdown>
    </>
  );
}
