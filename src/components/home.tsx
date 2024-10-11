import useMediaQuery from "@/hook/media";
import { SelectedPage } from "@/shared/navSelected";
import ActionButton from "@/shared/actionButton";

// Images
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorRedForbes from "@/assets/SponsorForbes.png";
import SponsorRedFortune from "@/assets/SponsorFortune.png";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

// Description data
import { HomeDesciption } from "@/constant/data";

type Props = {
  setSelectedpage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedpage }: Props) => {
  // Custom hook to check if the screen size is above 1060px
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="py-10 gap-16 md:pb-0">
      {/* IMAGE AND HEADER SECTION */}
      <motion.div
        onViewportEnter={() => setSelectedpage(SelectedPage.Home)}
        className="w-5/6 mx-auto lg:flex items-center justify-center md:h-5/6"
      >
        {/* Header Text and Description */}
        <div className="mt-20 md:mt-40 lg:mt-32 md:basis-3/5">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:-mt-20"
          >
            <div>
              <img src={HomePageText} alt="home-page-header" />
            </div>
            {/* Description */}
            <p className="mt-8 text-lg">{HomeDesciption.description}</p>
          </motion.div>

          {/* Call to Action buttons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 flex items-center gap-8"
          >
            {/* Join Now Button */}
            <ActionButton setSelectedpage={setSelectedpage}>Join now</ActionButton>
            
            {/* Learn More Link */}
            <AnchorLink
              href={`#${SelectedPage.ContactUs}`}
              onClick={() => setSelectedpage(SelectedPage.ContactUs)}
              className="text-red-400 hover:text-amber-600 text-sm underline"
            >
              <p>Learn more</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* Home Graphic Image */}
        <div className="flex basis-5/6 justify-center md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="home-graphic-image" />
        </div>
      </motion.div>

      {/* Sponsors Section */}
      {isAboveMediumScreen && (
        <div className="h-[150px] w-full bg-pink-200 py-10">
          <div className="w-5/6 mx-auto">
            <div className="flex w-3/5 items-center gap-8 justify-between">
              <img src={SponsorRedBull} alt="Sponsor RedBull" />
              <img src={SponsorRedForbes} alt="Sponsor Forbes" />
              <img src={SponsorRedFortune} alt="Sponsor Fortune" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
