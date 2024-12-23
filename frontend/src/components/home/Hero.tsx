import { motion } from "motion/react";

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.2,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="text-white text-center py-12 sm:py-16 md:py-24 lg:py-32"
    >
      <motion.h1
        variants={item}
        className="text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] 
                   font-poppins font-semibold 
                   leading-[48px] sm:leading-[63px] md:leading-[84px] lg:leading-[108px] 
                   mb-3 sm:mb-4 md:mb-5 lg:mb-6 
                   tracking-wide bg-gradient-to-r from-white to-gray-400 
                   bg-clip-text text-transparent"
      >
        Hi I'm Meet Shah
      </motion.h1>
      <motion.h1
        variants={item}
        className="text-[24px] sm:text-[32px] md:text-[42px] lg:text-[56px] 
                   font-poppins font-semibold 
                   leading-[36px] sm:leading-[48px] md:leading-[63px] lg:leading-[84px] 
                   tracking-wide bg-gradient-to-r from-white to-gray-400 
                   bg-clip-text text-transparent"
      >
        Welcome to my websit, new change
      </motion.h1>
    </motion.div>
  );
};

export default Hero;
