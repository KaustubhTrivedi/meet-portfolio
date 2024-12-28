import framer_logo from "@/assets/toolIcons/framer_logo.svg";
import behance_logo from "@/assets/toolIcons/behance_logo.svg";
import canva_logo from "@/assets/toolIcons/canva_logo.svg";
import figma_logo from "@/assets/toolIcons/figma_logo.svg";
import illustrator_logo from "@/assets/toolIcons/illustrator.svg";
import linkedin_logo from "@/assets/toolIcons/linkedin_logo.svg";
import notion_logo from "@/assets/toolIcons/notion_logo.svg";
import wix_logo from "@/assets/toolIcons/wix_logo.svg";
import xd_logo_png from "@/assets/toolIcons/xd_logo_png.png";
import { motion } from "framer-motion";

const Tools = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="container mx-auto py-12"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl text-[#CFEF00] mb-8 text-center"
        variants={item}
      >
        Tools I use
      </motion.h2>
      <motion.div
        className="flex overflow-x-auto gap-8 justify-center items-center max-w-full mx-auto p-4"
        variants={container}
      >
        {[
          { src: framer_logo, alt: "Framer" },
          { src: behance_logo, alt: "Behance" },
          { src: canva_logo, alt: "Canva" },
          { src: figma_logo, alt: "Figma" },
          { src: illustrator_logo, alt: "Illustrator" },
          { src: linkedin_logo, alt: "LinkedIn" },
          { src: notion_logo, alt: "Notion" },
          { src: wix_logo, alt: "Wix" },
          { src: xd_logo_png, alt: "Adobe XD" },
        ].map((tool, index) => (
          <motion.div
            key={index}
            className="tool-icon flex-shrink-0 p-2"
            variants={item}
            whileHover={{
              scale: 1.1,
              rotate: [0, -10, 10, 0],
              transition: { duration: 0.3 },
            }}
          >
            <img
              src={tool.src}
              alt={tool.alt}
              className="w-14 h-14 object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Tools;
