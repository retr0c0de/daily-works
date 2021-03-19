import React from "react";
import LinkButton from "../Atoms/LinkButton";

const AuthButtons = () => {
  return (
    <div className="order-3 sm:space-x-1 justify-self-end">
      <LinkButton
        router="/login"
        routerName="Log In"
        isPrimary={false}
        bgColor="indigo"
      />
      <LinkButton
        router="/register"
        routerName="Sign Up"
        isPrimary={true}
        bgColor="indigo"
      />
    </div>
  );
};

export default AuthButtons;
