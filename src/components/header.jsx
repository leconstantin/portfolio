import React from "react";
import { navLinks } from "../data/link";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      <header className="py-10">
        <nav className="flex items-center justify-between">
          <div className="flex">
            <p className="flex font-bold font-roboto text-teal-400 text-xl">
              <span className="text-teal-500">
                <img src="/logo.png" alt="" className="h-7" />
              </span>
              <span className="pt-[0.12rem]"> | Constantin</span>
            </p>
          </div>
          <div
            className={`md:flex  gap-2 justify-center ${
              props.showmenu ? "" : "hidden"
            } transition-all duration-1000`}
          >
            <ul className={`${props.showmenu ? "menu" : "nav"}`}>
              {navLinks.map((link) => (
                <Link
                  to={link.path}
                  onClick={() => props.handleLink(link.id)}
                  key={link.id}
                >
                  <a
                    className={`relative block font-roboto px-4 py-2 transition hover:text-teal-500 
                      ${props.active === link.id ? "text-teal-500" : ""}`}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
            </ul>
          </div>

          <div className=" pr-12">
            {props.dark ? (
              <div className="cursor-pointer" onClick={props.handleTheme}>
                <img src="/icons/sun.svg" alt="" />
              </div>
            ) : (
              <div className="cursor-pointer" onClick={props.handleTheme}>
                <img src="/icons/moon.svg" alt="" />
              </div>
            )}
          </div>

          <div className="md:hidden" onClick={props.toggleMenu}>
            {props.showmenu ? (
              <img
                src="/icons/close.svg"
                alt="clos bar"
                loading="lazy"
                title="hide navs"
                className="w-7 h-7 cursor-pointer  text-gray-800 dark:text-white"
              />
            ) : (
              <img
                src="/icons/menu.svg"
                alt="menu bar"
                loading="lazy"
                title="Show hidden navs"
                className="w-7 h-7 cursor-pointer  text-gray-800 dark:text-white"
              />
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
