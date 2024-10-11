import useMediaQuery from "@/hook/media";
import { SelectedPage } from "@/shared/navSelected";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  name: string;
  description: string;
  image: string;
  setSelectedpage: (value: SelectedPage) => void;
};

const ClassImg = ({ name, image, description, setSelectedpage }: Props) => {
  const isBelowmediumScreen = useMediaQuery("(max-width: 744px)");
  return (
    <div className=" relative overflow-hidden cursor-pointer ">
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center opacity-0 transition duration-500  font-semibold  text-black backdrop-blur-sm rounded-lg hover:opacity-90 ">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p
          className={`text-sm ${
            isBelowmediumScreen ? "text-base" : ""
          } px-4 mt-4 `}
        >
          {isBelowmediumScreen
            ? description.substring(0, description.indexOf(".")+1)
            : description}
        </p>
        <AnchorLink
          href={`#${SelectedPage.ContactUs}`}
          onClick={() => setSelectedpage(SelectedPage.ContactUs)}
          className="hover:text-amber-900 text-sm underline"
        >
          <p>Learn more</p>
        </AnchorLink>
      </div>
    </div>
  );
};

export default ClassImg;
