import React from "react";
import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const [dark, setDark] = React.useState(false);
  const [shoWmenu, setshoWMenu] = React.useState(false);
  const [active, setactive] = React.useState(0);

  function handleTheme() {
    setDark((prev) => !prev);
  }
  function toggleMenu() {
    setshoWMenu((prev) => !prev);
  }
  function handleLink(id) {
    setactive(id);
    setshoWMenu(false);
  }

  return (
    <div className="bg-zinc-50 overflow-hidden">
      <div className="bg-white min-h-screen lg:mx-16 sm:mx-7 shadow-lg">
        <div className="px-7 md:px-16 ">
          <Header
            showmenu={shoWmenu}
            toggleMenu={toggleMenu}
            active={active}
            handleLink={handleLink}
            dark={dark}
            handleTheme={handleTheme}
          />
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
