import React from "react";
import SocialLinksChunk from "../Chunks/SocialLinksChunk";

const FooterLayout = () => {
  return (
    <footer className="relative flex flex-col items-center pb-10 text-black justify-evenly h-96">
      <h1 className="text-sm font-semibold uppercase sm:text-2xl">
        Follow us on
      </h1>

      <SocialLinksChunk />

      <div className="mb-2 text-6xl">👩‍💻</div>

      <div className="absolute mt-4 text-xs text-center top-3/4">
        © 2021 Daily Works®
      </div>
    </footer>
  );
};

export default FooterLayout;
