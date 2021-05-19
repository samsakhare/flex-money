import React from "react";
import { useRouter } from "next/router";

const ActiveLink = ({ children, href, isMobileMenu = false }) => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      href="#"
      className={`${
        router.asPath === href
          ? `bg-gray-900 text-white`
          : `text-gray-300 hover:bg-gray-700 hover:text-white`
      } ${
        isMobileMenu ? `block text-base` : `text-sm`
      } px-3 py-2 rounded-md font-medium`}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};
export default ActiveLink;
