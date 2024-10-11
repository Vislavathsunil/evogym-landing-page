import { SelectedPage } from "@/shared/navSelected";

import BenfitsGraphics from "@/assets/BenefitsPageGraphic.png";
import { benfits } from "@/constant/data";
import { MillionsHappyCustomer } from "@/constant/data";

import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benfit from "./benfit";
import ActionButton from "@/shared/actionButton";

type Props = {
  setSelectedpage: (value: SelectedPage) => void;
};

const Benfits = ({ setSelectedpage }: Props) => {
  return (
    <section id="benefits" className="w-5/6 min-h-full mx-auto py-10">
      {/* On entering the viewport, set the selected page to "Benfits" */}
      <motion.div onViewportEnter={() => setSelectedpage(SelectedPage.Benfits)}>
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, x: -50 }} // Start with opacity 0 and x offset for animation
          whileInView={{ opacity: 1, x: 0 }} // Animate to opacity 1 and original x position when in view
          transition={{ duration: 0.5 }} // Animation duration
          className="md:w-3/5"
        >
          <HText>MORE THAN JUST GYM</HText>
          <p className="text-sm my-5">
            We provide world class fitness equipment, trainers, and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* BENFITS SECTION */}
        <div className="my-6 flex flex-col items-center gap-5 justify-between md:flex-row ga-8">
          {/* Loop through benfits array to display each benefit */}
          {benfits.map((ele, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and y offset for animation
              whileInView={{ opacity: 1, y: 0 }} // Animate to opacity 1 and original y position when in view
              transition={{ duration: 0.25, delay: i * 0.25 }} // Animation delay increases for each element
              key={ele.title}
            >
              <Benfit
                icon={ele.icon}
                title={ele.title}
                description={ele.description}
                setSelectedpage={setSelectedpage}
              />
            </motion.div>
          ))}
        </div>

        {/* GRAPHICS AND DESCRIPTIONS */}
        <div className="mt-16 items-center justify-between gap-20 lg:flex md:mt-20">
          
          {/* GRAPHIC IMAGE */}
          <img
            src={BenfitsGraphics}
            alt="Benfits-Graphics-image"
            className="mx-auto"
          />

          {/* DESCRIPTION SECTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              {/* Abstract wave element */}
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwave">
                <motion.div
                  initial={{ opacity: 0, x: 50 }} // Start with opacity 0 and x offset for animation
                  whileInView={{ opacity: 1, x: 0 }} // Animate to opacity 1 and original x position when in view
                  transition={{ duration: 0.75 }} // Animation duration
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-red-500">FIT</span>.
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPTION CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }} // Start with opacity 0 and x offset for animation
              whileInView={{ opacity: 1, x: 0 }} // Animate to opacity 1 and original x position when in view
              transition={{ duration: 0.5, delay: 0.25 }} // Animation delay
              className="my-5 flex flex-col gap-4"
            >
              <p>{MillionsHappyCustomer.para1}</p>
              <p>{MillionsHappyCustomer.para2}</p>
            </motion.div>

            {/* JOIN NOW BUTTON */}
            <div className="relative mt-10 ">
              {/* Sparkle animation */}
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkle">
                <ActionButton setSelectedpage={setSelectedpage}>
                  Join now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benfits;
