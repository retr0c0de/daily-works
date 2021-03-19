import React from "react";
import { GrFacebook, GrInstagram, GrLinkedin, GrTwitter } from "react-icons/gr";

const classes = "w-6 h-6 mx-6 text-gray-500 cursor-pointer transition";

const socialLinksList = [
  {
    link: "http://www.facebook.com",
    element: <GrFacebook className={`${classes} hover:text-indigo-700`} />,
  },
  {
    link: "http://www.twitter.com",
    element: <GrTwitter className={`${classes} hover:text-blue-500`} />,
  },
  {
    link: "http://www.linkedin.com",
    element: <GrLinkedin className={`${classes} hover:text-blue-700`} />,
  },
  {
    link: "http://www.instagram.com",
    element: <GrInstagram className={`${classes} hover:text-pink-600`} />,
  },
];

const SocialLinksChunk = () => {
  return (
    <div className="flex justify-evenly">
      {socialLinksList.map((socialLink) => (
        <a rel="noreferrer" target="_blank" href={socialLink.link}>
          {socialLink.element}
        </a>
      ))}
    </div>
  );
};

export default SocialLinksChunk;
