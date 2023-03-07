import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      name: "Home",
    },
    {
      id: 2,
      link: "stats",
      name: "Stats",
    },
    {
      id: 3,
      link: "marketplace",
      name: "Marketplace",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 10 ? setShadow(true) : setShadow(false);
    });
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div
        className={
          shadow
            ? " w-full h-[70px] duration-300 z-[10] shadow-lg backdrop-blur-xl "
            : " w-full h-[70px] duration-300 z-[10] "
        }
      >
        {/* this is for large screen devices */}
        <div className="flex justify-between items-center h-[70px] container text-black px-2 ">
          <div className="flex justify-center items-center gap-3 md:gap-[20px]">
            <img src={Logo} alt="Hypenft" />
            {/* search  */}

            <div className="relative text-[#CACACE] ">
              <button type="submit" className="absolute left-4 top-0 mt-2 mr-4">
                <AiOutlineSearch size={20} className="text-[#CACACE]" />
              </button>

              <input
                type="search"
                name="serch"
                placeholder="Search nfts, artists, categories & genres..."
                className="border h-10 w-28 lg:w-80 xl:w-96 px-[11px] pl-10 rounded-full text-sm focus:outline-none "
              />
            </div>
          </div>
          <ul className="hidden md:flex justify-around items-center gap-[20px]">
            {links.map(({ id, link, name }) => (
              <li
                key={id}
                className="cursor-pointer capitalize hover:scale-105 duration-200  font-medium text-[#74798A]"
              >
                <div to={link} duration={500}>
                  {name}
                </div>
              </li>
            ))}
            <button className="bg-black text-white rounded-full py-[10px] px-[20px] font-bold ">
              Connect Wallet
            </button>
          </ul>
          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
      </div>
      {/* this is for small screen devices */}

      <div
        className={
          nav
            ? "fixed h-screen left-0 top-0 w-[80%] text-[#74798A] font-medium ease-in duration-500 backdrop-blur-lg z-40"
            : "fixed h-screen left-[-100%] w-[80%] top-0 ease-in duration-500 backdrop-blur-lg z-40"
        }
      >
        <ul>
          <div className="w-full text-3xl font-bold  m-4">
            <img src={Logo} alt="Hypenft" />
          </div>
          {links.map(({ id, link, name }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-3 ">
              <div onClick={() => setNav(!nav)} to={link} duration={500}>
                {name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
