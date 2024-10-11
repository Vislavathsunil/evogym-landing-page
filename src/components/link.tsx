import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../shared/navSelected";

type Props = {
  page: string;
  selectedpage: SelectedPage;
  setSelectedpage: (value: SelectedPage) => void;
 
};

const Link = ({
  page,
  selectedpage,
  setSelectedpage,
  
}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      className={`${
        selectedpage === lowerCasePage ? "text-red-400" : ""
      } transition duration-500 hover:text-amber-600 `}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedpage(lowerCasePage);
    
      }}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
