import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/navSelected";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";

// Emailjs and toaster
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

// Join now description
import { JoinNow } from "@/constant/data";

import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";

// Define user details structure
type userDetails = {
  name: string;
  email: string;
  message: string;
};

type Props = {
  setSelectedpage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedpage }: Props) => {
  // Zod schema for form validation
  const User: ZodType<userDetails> = z.object({
    name: z.string().min(3, "minimum 3 character").max(12, "maximum 12 character"),
    email: z.string().email("ex: test@gmail.com"),
    message: z.string(),
  });

  // Initialize the useForm hook with validation resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<userDetails>({ resolver: zodResolver(User) });

  // Function to handle form submission
  const onsubmit = (data: userDetails) => {
    const UserData = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_r9d46cb",
        "template_99n9xs6",
        UserData,
        "chOZPoVSmpvRzErPS"
      )
      .then((response) => {
        toast.success("Message sent successfully"); // Notify user of success
        reset({ name: "", email: "", message: "" }); // Reset form fields
      })
      .catch((error) => {
        toast.error("Something went wrong while sending the email."); // Notify user of error
      });
  };

  return (
    <section className="w-5/6 mx-auto py-10">
      <Toaster />
      <motion.div
        id="contactus"
        onViewportEnter={() => setSelectedpage(SelectedPage.ContactUs)} // Set the selected page
      >
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -50 }} // Initial state: hidden and shifted left
          whileInView={{ opacity: 1, x: 0 }} // Animate to visible and original position
          transition={{ duration: 0.5 }} // Animation duration
          className="md:w-3/5 flex flex-col gap-4"
        >
          <HText>
            <span className="text-red-400">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p>{JoinNow.para}</p> {/* Join now description */}
        </motion.div>

        {/* FORM AND IMAGE SECTION */}
        <div className="mt-10 justify-between md:flex gap-8">
          {/* FORM SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }} // Initial state: hidden and shifted left
            whileInView={{ opacity: 1, x: 0 }} // Animate to visible and original position
            transition={{ duration: 0.5 }} // Animation duration
            viewport={{ once: true }} // Animation only once
            className="basis-3/5"
          >
            <form
              onSubmit={handleSubmit(onsubmit)} // Handle form submission
              className="flex flex-col gap-4 justify-center"
            >
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: "Name is required" })} // Register name input with validation
                className="w-full rounded-md bg-red-300 h-10 placeholder:text-white pl-2"
              />
              {errors.name && <p>{errors.name.message}</p>} {/* Display name validation error */}

              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: "Email is required" })} // Register email input with validation
                className="w-full rounded-md bg-red-300 h-10 placeholder:text-white pl-2"
              />
              {errors.email && <p>{errors.email.message}</p>} {/* Display email validation error */}

              <textarea
                placeholder="Message"
                {...register("message")} // Register message textarea
                className="w-full rounded-md bg-red-300 h-20 placeholder:text-white placeholder:text-start p-2"
              ></textarea>

              <button
                type="submit"
                className="border bg-yellow-400/100 hover:bg-yellow-500 w-1/3 py-2 rounded-md font-bold"
              >
                Submit
              </button>
            </form>
          </motion.div>

          {/* IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 50 }} // Initial state: hidden and shifted right
            whileInView={{ opacity: 1, x: 0 }} // Animate to visible and original position
            transition={{ duration: 0.5 }} // Animation duration
            viewport={{ once: true }} // Animation only once
            className="mt-6 md:mt-0"
          >
            <img src={ContactUsPageGraphic} alt="Contact Us" className="w-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
