import { SelectedPage } from "@/shared/navSelected";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedpage: (value: SelectedPage) => void;
};

const Benfit = ({ icon, title, description, setSelectedpage }: Props) => {
  return (
    <div className="border-2 border-gray-400 rounded-md px-5 py-10 text-center ">
      <div className="flex flex-col gap-2">
        <div className="flex justify-center">
          <div className="border border-gray-400 bg-pink-200 p-2 rounded-full">
            {icon}
          </div>
        </div>
        <h4 className="text-base font-bold">{title}</h4>
        <p className="text-sm">{description}</p>

        <AnchorLink
          href={`#${SelectedPage.ContactUs}`}
          onClick={() => setSelectedpage(SelectedPage.ContactUs)}
          className="text-red-400 hover:texzt-amber-600 text-sm underline"
        >
          <p>Learn more</p>
        </AnchorLink>
      </div>
    </div>
  );
};

export default Benfit;
