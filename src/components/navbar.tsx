import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Logo.png";
import Link from "./link";
import useMediaQuery from "@/hook/media";
import ActionButton from "@/shared/actionButton";
import { SelectedPage } from "../shared/navSelected";

type Props = {
  isTopOfPage: boolean;
  selectedpage: SelectedPage;
  setSelectedpage: (value: SelectedPage) => void;
};

const Navbar: React.FC<Props> = ({
  isTopOfPage,
  selectedpage,
  setSelectedpage,
}: Props) => {
  // State to manage mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Custom hook to check if the screen size is above the specified breakpoints
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const isAboveSmallScreen = useMediaQuery("(min-width: 744px)");

  return (
    <nav>
      {/* Navbar container */}
      <div
        className={`${
          !isTopOfPage && "bg-primary drop-shadow"
        } fixed top-0 z-30 w-full py-6 flex items-center`}
      >
        <div className="flex items-center justify-between mx-auto w-5/6">
          <div className="flex justify-between items-center w-full gap-16">
            {/* Left side - Logo */}
            <img src={logo} alt="brand_logo" />

            {/* Right side - Links and Action Button */}
            {isAboveMediumScreen ? (
              <div className="hidden md:block">
                <div className="flex justify-between items-center gap-8 w-full">
                  {/* Navigation Links */}
                  <div className="flex justify-between items-center gap-8 text-sm font-semibold">
                    <Link
                      page="Home"
                      selectedpage={selectedpage}
                      setSelectedpage={setSelectedpage}
                    />
                    <Link
                      page="Benefits"
                      selectedpage={selectedpage}
                      setSelectedpage={setSelectedpage}
                    />
                    <Link
                      page="Our Classes"
                      selectedpage={selectedpage}
                      setSelectedpage={setSelectedpage}
                    />
                    <Link
                      page="Contact Us"
                      selectedpage={selectedpage}
                      setSelectedpage={setSelectedpage}
                    />
                  </div>

                  {/* Sign In and Become a Member Button */}
                  <div className="flex justify-between items-center gap-8">
                    <p className="font-semibold cursor-pointer">Sign in</p>
                    <ActionButton setSelectedpage={setSelectedpage}>
                      Become a member
                    </ActionButton>
                  </div>
                </div>
              </div>
            ) : (
              // Mobile menu button for small screens
              <div>
                <button
                  className="bg-yellow-500 text-white p-2 rounded-full cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6 text-white" />
                  ) : (
                    <Menu />
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      {!isAboveMediumScreen && isMobileMenuOpen && (
        <div
          className={`mobil-div fixed right-0 bottom-0 bg-pink-400 h-full ${
            isAboveSmallScreen ? "w-[300px]" : "w-[250px]"
          } z-40`}
        >
          {/* Close button */}
          <div className="flex justify-end items-center py-8 px-12">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          {/* Mobile menu items */}
          <div
            className={`${
              isAboveSmallScreen ? "ml-[33%]" : "ml-[20%]"
            } flex flex-col gap-8 mt-4 text-xl font-semibold`}
          >
            <Link
              page="Home"
              selectedpage={selectedpage}
              setSelectedpage={setSelectedpage}
            />
            <Link
              page="Benefits"
              selectedpage={selectedpage}
              setSelectedpage={setSelectedpage}
            />
            <Link
              page="Our Classes"
              selectedpage={selectedpage}
              setSelectedpage={setSelectedpage}
            />
            <Link
              page="Contact Us"
              selectedpage={selectedpage}
              setSelectedpage={setSelectedpage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
