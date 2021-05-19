import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ActiveLink from "./ActiveLink";

const NavigationBar = ({ appName }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const router = useRouter();
  function toogleMenu() {
    setIsMenuVisible(!isMenuVisible);
  }
  return (
    <>
      <>
        {/* This example requires Tailwind CSS v2.0+ */}
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  onClick={toogleMenu}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className={`${
                      isMenuVisible ? "hidden" : "block"
                    } block h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    className={`${!isMenuVisible ? "hidden" : "block"} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <p
                    className="block lg:hidden h-8 w-auto text-lg uppercase font-bold text-white"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  >
                    {appName}
                  </p>
                  <p
                    className="hidden lg:block h-8 w-auto text-lg uppercase font-bold text-white"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  >
                    {appName}
                  </p>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <ActiveLink href="/">Demo</ActiveLink>
                    {/* <ActiveLink href="/feature">Feature</ActiveLink> */}
                    <ActiveLink href="/documentation">Documentation</ActiveLink>
                    {/* <ActiveLink href="/download">Download</ActiveLink> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile menu, show/hide based on menu state. */}
          <div className="sm:hidden" id="mobile-menu">
            <div
              className={`${
                isMenuVisible ? "block" : "hidden"
              } px-2 pt-2 pb-3 space-y-1`}
            >
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <ActiveLink href="/" isMobileMenu={true}>
                Demo
              </ActiveLink>
              {/* <ActiveLink href="/feature" isMobileMenu={true}>
                Feature
              </ActiveLink> */}
              <ActiveLink href="/documentation" isMobileMenu={true}>
                Documentation
              </ActiveLink>
              {/* <ActiveLink href="/download" isMobileMenu={true}>
                Download
              </ActiveLink> */}
            </div>
          </div>
        </nav>
      </>
    </>
  );
};

export default NavigationBar;
