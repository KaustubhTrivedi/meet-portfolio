import { motion } from "motion/react";
import { Button } from "../ui/button";
import linkedin_short from "@/assets/brandLogos/linkedin_short.png";
import facebook_logo from "@/assets/brandLogos/facebook_logo.png";
import gmail_logo from "@/assets/brandLogos/gmail_logo.png";
const Footer = () => {
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
    <div className="!mt-40">
      <div className="grid grid-cols-2">
        <div>
          <div className="text-left">
            <motion.h1
              variants={item}
              className="text-[16px] sm:text-[20px] md:text-[28px] lg:text-[36px] 
    font-poppins font-semibold 
    leading-[24px] sm:leading-[32px] md:leading-[40px] lg:leading-[52px] 
    mb-3 sm:mb-4 md:mb-5 lg:mb-6 
    tracking-wide bg-gradient-to-r from-white to-gray-400 
    bg-clip-text text-transparent"
            >
              Ready to create something awesome together?
            </motion.h1>
            <Button className="bg-[#CFEF00] text-black rounded-full font-medium hover:bg-[#b9d600]">
              Let's Connect
            </Button>
          </div>
        </div>
        <div>
          <ul className="flex justify-center space-x-4">
            <li>
              <a
                href="https://www.linkedin.com/in/abhishek-singh-ux/"
                target="_blank"
              >
                <img src={linkedin_short} className="h-16 w-18" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/abhishek-singh-ux/"
                target="_blank"
              >
                <img src={facebook_logo} className="h-16 w-18" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/abhishek-singh-ux/"
                target="_blank"
              >
                <img src={gmail_logo} className="h-16 w-18" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
