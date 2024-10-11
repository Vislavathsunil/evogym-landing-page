import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"; // Importing the AnchorLink component for smooth scrolling

import { SelectedPage } from "./navSelected"; // Importing the SelectedPage type for page selection

// Define the props type for the ActionButton component
type Props = {
  children: React.ReactNode; // Children elements to be rendered inside the button
  setSelectedpage: (value: SelectedPage) => void; // Function to update the selected page
};

// ActionButton component definition
const ActionButton = ({ children, setSelectedpage }: Props) => {
  return (
    // AnchorLink for smooth scrolling to the ContactUs section
    <AnchorLink
      href={`#${SelectedPage.ContactUs}`} // The href is set to the ContactUs section
      onClick={() => setSelectedpage(SelectedPage.ContactUs)} // Update the selected page on click
      className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-lg" // Button styling
    >
      <button> {children} </button>
    </AnchorLink>
  );
};

export default ActionButton; // Export the ActionButton component
