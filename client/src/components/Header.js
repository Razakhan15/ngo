import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ name }) => {
  const nav = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    if (name) {
      nav("/ngo/admin/login");
    } else nav("/user/login");
  };
  return (
    <>
      <div className="bg-gray-800 w-full p-4">
        <div className="text-white flex justify-between items-center ">
          <div className="flex gap-5">
            <img src="/icon.png" className="h-14" />
            <button
              onClick={handleLogout}
              className="bg-cyan-600 p-2 font-bold rounded-md transition delay-100 hover:bg-cyan-100 hover:text-black"
            >
              Logout
            </button>
          </div>
          <p className="uppercase font-serif text-2xl hidden lg:block ">International Society for Krishna Consciousness</p>
          <div>
            <img src="/guru.png" alt="" className="h-14" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
