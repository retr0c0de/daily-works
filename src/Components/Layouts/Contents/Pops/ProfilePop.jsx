import React from "react";
import ReactDOM from "react-dom";

const portalRoot = document.getElementById("portal-root");

const ProfilePop = () => {
  return ReactDOM.createPortal(<div></div>, portalRoot);
};

export default ProfilePop;
