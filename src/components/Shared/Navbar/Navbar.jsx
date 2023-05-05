import { useState } from "react";
import "./navbar.scss";
import { Fade as Hamburger } from "hamburger-react";
// Images
import NavLogo from "../../../assets/images/navbar/navlogo.svg";
import User from "../../../assets/images/navbar/user.png";
import formImage from "../../../assets/images/navbar/search.png";
// Components
import Form from "../../Form/Form";
import NavSettings from "../../NavSettings/NavSettings";

const Navbar = () => {
  // Show Menu
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = (e) => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="bg-dark-gray text-white relative">
      <div className="container px-6 sm:px-6 mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* List Section On Small Screens */}
        <div
          className={`lists block sm:hidden absolute w-full z-10 bg-dark-gray text-white px-6 py-4 ${
            showMenu ? "animate" : ""
          }`}
        >
          <div className="user flex items-center gap-x-5 w-full">
            <div className="img">
              <img src={User} alt="user" />
            </div>
            <div className="info">
              <p className="name mb-1.5">محمد أشرف</p>
              <p className="type opacity-80">مالك</p>
            </div>
          </div>
          <Form
            classes="flex bg-form gap-x-4 items-center rounded-lg my-2.5 px-2 py-3"
            context="البحث ..."
            formImage={formImage}
          />
          <div className="settings flex items-center justify-between">
            <NavSettings />
          </div>
        </div>
        {/* Logo Section */}
        <div className="nav-logo flex gap-x-4 md:gap-x-16 ">
          <div>
            <img src={NavLogo} alt="logo" />
          </div>
          {/* Burger Icon */}
          <div
            className="burger-menu block sm:hidden relative z-20"
            onClick={handleShowMenu}
          >
            <Hamburger direction="left" />
          </div>
          <Form
            classes="hidden sm:flex bg-form gap-x-4 items-center rounded-lg my-2.5 px-2"
            context="البحث ..."
            formImage={formImage}
          />
        </div>
        {/* Settings Section */}
        <div className="settings gap-5 md:gap-11 hidden sm:flex items-center">
          <NavSettings />
          <div className="user flex items-center gap-x-5">
            <div className="img">
              <img src={User} alt="user" />
            </div>
            <div className="info">
              <p className="name mb-1">محمد أشرف</p>
              <p className="type opacity-80">مالك</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
