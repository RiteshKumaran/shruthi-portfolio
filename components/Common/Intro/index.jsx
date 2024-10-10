import Link from "next/link";
import {
  FaDownload,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Contact from "./Contact";
import Download from "./Download";
import Languages from "./Languages";
import Location from "./Location";
import Tools from "./Tools";
import Skills from "./Skills";
import Image from "next/image";
import { NAME, DESIGNATION, SOCIAL_LINKS } from "../../../constants/constants";
import Osama from "../../../public/images/shruthi.jpeg";
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

const Intro = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* fixed at top */}
      <div className="headerr z-50 absolute bg-MidNightBlack backdrop-blur-sm inset-y-0 h-48 top-0 flex items-center justify-center w-full flex-col px-4 gap-y-4">
        <Image
          className="rounded-full w-20 h-20"
          src={Osama}
          alt="profile picture"
        />
        <div className="flex flex-col items-center justify-center">
          <span className="text-gray-300 text-base font-bold break-normal">
            {NAME}
          </span>
          <span className="text-sm text-LightGray text-center mt-2">
            {DESIGNATION}
          </span>
        </div>
      </div>

      {/* middle components */}
      <motion.div className="beech z-20 flex flex-col overflow-y-scroll pt-48 top-48 space-y-6 divide-y divide-white overflow-x-hidden no-scrollbar px-4">
        <Location />
        <Languages />
        <Skills />
        {/* <Tools /> */}
        <Contact />
        <Download icon={<FaDownload />} />
      </motion.div>

      {/* fixed at bottom */}
      <div className="footer absolute flex justify-center space-x-6 text-xl items-center bottom-0 z-50 h-10 w-full bg-MidNightBlack text-Snow">
        <Link
          href={SOCIAL_LINKS.GITHUB}
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <FaGithub />
        </Link>
        {/* <Link href={SOCIAL_LINKS.TWITTER} target='_blank' rel='noreferrer' className=''>
          <FaTwitter />
        </Link> */}
        {/* <Link href={SOCIAL_LINKS.FACEBOOK} target='_blank' rel='noreferrer' className=''>
          <FaFacebook />
        </Link> */}
        <Link
          href={SOCIAL_LINKS.LINKEDIN}
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <FaLinkedin />
        </Link>
      </div>
    </motion.div>
  );
};

export default Intro;
