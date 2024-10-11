import { motion } from "framer-motion";
import logo from "@/assets/Logo.png";
import { FaLinkedin, FaSquarePhone, FaTwitter } from "react-icons/fa6";
import { FaHome, FaInstagramSquare } from "react-icons/fa";

// Footer description
import { FooterDescription } from "@/constant/data";

type Props = {};

const Footer = ({}: Props) => {
  return (
    <footer className="w-5/6 mx-auto md:pt-20 pb-10">
      <motion.div className="flex flex-col gap-16 lg:flex-row justify-between">
        {/* COMPANY LOGO SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -50 }} // Initial state: hidden and shifted left
          whileInView={{ opacity: 1, x: 0 }} // Animate to visible and original position
          transition={{ duration: 0.5 }} // Animation duration
          className="basis-1/2"
        >
          <img src={logo} alt="logo" /> {/* Company logo */}
          <div className="flex flex-col gap-2 mt-4">
            <p>{FooterDescription.descript}</p> {/* Footer description */}
          </div>
        </motion.div>

        <div className="basis-1/2 flex flex-col gap-8 justify-between md:gap-0 min-[744px]:flex-row md:justify-around">
          {/* SOCIAL MEDIA SECTION */}
          <motion.div
            initial={{ opacity: 0, y: -50 }} // Initial state: hidden and shifted up
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
            transition={{ duration: 0.5 }} // Animation duration
            className="basis-1/2"
          >
            <h4 className="font-bold">Social Media</h4> {/* Section title */}
            <div className="mt-4 flex items-center gap-4">
              {/* Social Media Links */}
              <a
                href="https://www.linkedin.com/in/sunil2004/"
                target="_blank"
                rel="noopener noreferrer" // Security improvement for external links
                className="text-2xl hover:text-blue-700"
              >
                <FaLinkedin /> {/* LinkedIn icon */}
              </a>
              <a
                href="https://x.com/mrsunil0101"
                target="_blank"
                rel="noopener noreferrer" // Security improvement for external links
                className="text-2xl hover:text-blue-500"
              >
                <FaTwitter /> {/* Twitter icon */}
              </a>
              <a
                href="https://www.instagram.com/the_darkhacker010"
                target="_blank"
                rel="noopener noreferrer" // Security improvement for external links
                className="text-2xl hover:text-red-600"
              >
                <FaInstagramSquare /> {/* Instagram icon */}
              </a>
            </div>
          </motion.div>

          {/* CONTACT DETAILS SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 50 }} // Initial state: hidden and shifted right
            whileInView={{ opacity: 1, x: 0 }} // Animate to visible and original position
            transition={{ duration: 0.5 }} // Animation duration
            className="basis-1/2"
          >
            <h4 className="font-bold">Address</h4> {/* Section title */}
            <div className="mt-4 flex flex-col gap-4">
              <p className="flex items-start gap-2">
                <FaHome className="text-2xl cursor-pointer hover:text-slate-600" />{" "}
                {/* Home icon */}
                <p>3-59, Hitech City, Hyderabad, Telangana</p> {/* Address */}
              </p>
              <p className="">
                <a
                  href="callto:+916303141055" // Click-to-call link
                  className="cursor-pointer flex items-center gap-2"
                >
                  <FaSquarePhone className="text-2xl cursor-pointer hover:text-green-600" />{" "}
                  {/* Phone icon */}
                  +91 6303141055 {/* Phone number */}
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* COPYRIGHT NOTICE */}
      <div className="flex justify-center items-center mt-8">
        <p>&copy; All rights are reserved</p> {/* Copyright text */}
      </div>
    </footer>
  );
};

export default Footer;
