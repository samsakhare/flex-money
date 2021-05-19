import React from "react";
import NavigationBar from "./NavigationBar";
const Header = ({ appName }) => {
  return (
    <>
      <NavigationBar appName={appName} />
    </>
  );
};

export default Header;
