import Footer from "../components/Footer";
import Banner from "../components/HomeComponents/Banner";
import MyExpertise from "../components/HomeComponents/Expertise/MyExpertise";
import Recommendations from "../components/HomeComponents/Recommendations/Recommendations";
import ClientReviews from "../components/HomeComponents/ClientReviews/ClientReviews";
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 100, // Start from below
  },
  in: {
    opacity: 1,
    y: 0, // Move to the middle of the screen
  },
  out: {
    opacity: 0,
    x: -100, // Move to the left of the screen
  },
};

const pageTransition = {
  duration: 0.5,
  ease: "easeInOut",
};

const home = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="Home-Page -z-10"
    >
      <Banner />
      <MyExpertise />
      {/* <Recommendations /> */}
      {/* <ClientReviews /> */}
      <Footer />
    </motion.div>
  );
};

export default home;
