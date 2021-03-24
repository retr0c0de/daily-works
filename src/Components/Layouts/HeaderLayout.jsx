import React, { useState } from "react";
import AppLogo from "../../Components/Chunks/AppLogo";
import HamMenu from "../Atoms/HamMenu";
import AuthButtons from "../Chunks/AuthButtons";
import LoggedIcons from "../Chunks/LoggedIcons";
import NavigationLayout from "./NavigationLayout";

const HeaderLayout = () => {
  const [isHamShown, setIsHamShown] = useState(true);
  const [toggleMobileNav, setToggleMobileNav] = useState("hidden");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleHam = () => {
    setIsHamShown(!isHamShown);
    setToggleMobileNav((toggleMobileNav) => {
      return (toggleMobileNav === "hidden") & isHamShown ? "visible" : "hidden";
    });
  };

  return (
    <div className="w-full h-16 shadow-sm">
      <header className="fixed flex flex-row items-center justify-between w-full h-16 px-2 space-x-2 bg-fixed bg-gray-50">
        <div className="flex flex-row items-center w-auto h-16 px-2 space-x-2">
          <HamMenu toggleHam={toggleHam} isHamShown={isHamShown} />

          <AppLogo />
        </div>

        <NavigationLayout
          toggleHam={toggleHam}
          isHamShown={isHamShown}
          toggleMobileNav={toggleMobileNav}
        />

        {isLoggedIn ? <LoggedIcons /> : <AuthButtons />}
      </header>
    </div>
  );
};

export default HeaderLayout;
