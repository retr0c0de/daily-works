import React from "react";
import LinkButton from "../Atoms/LinkButton";

const AuthButtons = () => {
  return (
    <div className="flex flex-col order-3 object-contain space-x-1 sm:flex-row">
      <LinkButton
        router="/login"
        routerName="Log In"
        isPrimary={false}
      />
      <LinkButton
        router="/register"
        routerName="Sign Up"
        isPrimary={true}
      />
    </div>
  );
};

export default AuthButtons;
