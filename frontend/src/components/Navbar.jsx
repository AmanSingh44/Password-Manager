import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-slate-800 text-white cursor-pointer ">
      <div className="mycontainer flex items-center px-4 py-5 justify-between h-14">
        <div className="logo font-bold text-2xl " onClick={() => navigate("/")}>
          <span className="text-green-700 ">&lt;</span>
          Pass
          <span className="text-green-700">OP&gt;</span>
        </div>
        <ul>
          <li className="flex gap-4">
            <a className="hover:font-bold" href="#">
              Home
            </a>
            <a className="hover:font-bold" href="#">
              About
            </a>
            <a className="hover:font-bold" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
