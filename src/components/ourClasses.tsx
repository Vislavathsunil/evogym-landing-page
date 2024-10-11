import { ClassType, SelectedPage } from "@/shared/navSelected";
import { ClientImages } from "@/constant/data";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import ClassImg from "./classimage";

// Our Classes description
import { OurClassesDescription } from "@/constant/data";
import useMediaQuery from "@/hook/media";

type Props = {
  setSelectedpage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedpage }: Props) => {
  // Check if the screen width is above 744px
  const isAboveSmallScreen = useMediaQuery("(min-width: 744px)");

  return (
    <section id="ourclasses" className="w-full py-20 mx-auto">
      {/* Set the selected page to "OurClasses" when this section comes into view */}
      <motion.div
        onViewportEnter={() => setSelectedpage(SelectedPage.OurClasses)}
      >
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -20 }} // Initial state: hidden and slightly shifted left
          whileInView={{ opacity: 1, x: 0 }} // Animate to visible and original position
          transition={{ duration: 0.5 }} // Animation duration
          className="w-5/6 mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }} // Initial state for header: hidden and shifted left
            whileInView={{ opacity: 1, x: 0 }} // Animate to visible and original position
            transition={{ duration: 0.5 }} // Animation duration
            className="md:w-3/5 flex flex-col gap-4"
          >
            <HText>OUR CLASSES</HText> {/* Header text */}
            <p>{OurClassesDescription.para}</p> {/* Description paragraph */}
          </motion.div>
        </motion.div>

        {/* IMAGE SECTION */}
        <div className="w-5/6 mx-auto mt-10 overflow-y-hidden overflow-x-auto">
          <div
            className={`grid grid-cols-1 gap-6 ${
              isAboveSmallScreen ? "grid-cols-2" : "" // Responsive grid columns based on screen size
            } lg:grid-cols-3`}
          >
            {/* Loop through ClientImages to display each class image */}
            {ClientImages.map((ele: ClassType, index) => (
              <motion.div
                key={index} // Use index as key for mapping
                initial={{ opacity: 0, y: 20 }} // Initial state: hidden and slightly shifted down
                whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
                transition={{ duration: 0.25, delay: index * 0.25 }} // Animation with increasing delay
              >
                <ClassImg
                  name={ele.name}
                  image={ele.image}
                  description={ele.description}
                  setSelectedpage={setSelectedpage}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
