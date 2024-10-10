import { useState } from "react";
import BannerLayout from "../components/Common/BannerLayout";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaTwitterSquare,
} from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { HiMail, HiUser } from "react-icons/hi";
import { BsChatTextFill } from "react-icons/bs";
import Fiverr_Icon from "../components/Fiverr_Icon";
import Footer from "../components/Footer";
import { Modal } from "antd";
import Image from "next/image";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen flex justify-center items-center rounded-md w-full">
      <div className="flex   flex-col justify-end  px-4 py-2">
        <div className="my-6  text-Snow flex flex-col gap-y-5">
          <h1 className="text-2xl font-bold">Contact Information</h1>

          <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
            <div className="card_stylings h-full w-full  p-5 py-12 md:px-16 lg:px-20 flex flex-col gap-x-5 gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Country:</span>
                <span className="text-LightGray md:text-base">India</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">City:</span>
                <span className="text-LightGray md:text-base">Chennai</span>
              </div>
            </div>
            <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between space-x-4 items-center">
                <span className="md:text-base">Email: </span>
                <span className="text-LightGray text-base">
                  {" "}
                  shruthi0808@gmail.com
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Linkedin:</span>
                <span className="text-LightGray text-base">shruthi-dev</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Phone:</span>
                <span className="text-LightGray text-base">9363599500</span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-16 w-full card_stylings text-xl base:text-3xl flex gap-x-8 base:gap-x-16 items-center justify-center text-Snow">
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://x.com/shruthi0808"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitterSquare />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://github.com/Shruthidev0805"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://www.linkedin.com/in/shruthi-dev/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          {/* <a className='hover:scale-125 ease-in-out duration-700' href="https://x.com/iosamajavaid" target='_blank' rel="noreferrer"><FaTwitter /></a> */}
        </div>
      </div>
      <div className="flex justify-center mt-9">
        {/* <Image src="/contact-img.jpeg" width={1000} height={100} /> */}
      </div>
      {/* success modal */}
      {/* <h1 className="text-white text-5xl text-center">Folow</h1>
      <Footer /> */}
    </div>
  );
};

export default Contact;
