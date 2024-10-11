import { useState } from "react";
import { useQuery } from "react-query";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import axios from "axios";
import { Skeleton } from "antd";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";
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

const Portfolio = () => {
  const { isLoading, error, data } = useQuery("portfolio", () =>
    axios
      .get("api/portfolio")
      .then(({ data }) => data)
      .catch((error) => console.error("Error fetching testimonials:", error))
  );
  return (
    <BannerLayout>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6"
      >
        {isLoading
          ? [1, 2, 3, 4].map(() => (
              <ImageAndParagraphSkeleton className={"w-full object-cover"} />
            ))
          : data?.map((data, key) => <PortfolioCard key={key} data={data} />)}
      </motion.div>
      {/* <Footer /> */}
    </BannerLayout>
  );
};

export default Portfolio;
