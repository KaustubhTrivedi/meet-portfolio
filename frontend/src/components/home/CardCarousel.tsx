import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router";
import ark_logo from "@/assets/cardImages/ark_logo.png";
import ark_card_image from "@/assets/cardImages/ark_card_image.png";
import aiducate_logo from "@/assets/cardImages/aiducate_logo.png";
import aiducate_main_image from "@/assets/cardImages/aiducate_main_image.png";
import unicare_logo from "@/assets/cardImages/unicare_logo.png";
import unicare_main_image from "@/assets/cardImages/unicare_main_image.png";

interface Card {
  id: number;
  logoIcon: string;
  tag: string;
  title: string;
  description: string;
  cta_link: string;
  main_image: string;
}

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards] = useState<Card[]>([
    {
      id: 1,
      title: "ADAPT ARK",
      tag: "UI/UX Design",
      description: "Risk assessment platform for hospitals",
      cta_link: "/projects/design-system",
      logoIcon: ark_logo,
      main_image: ark_card_image,
    },
    {
      id: 2,
      title: "Aid-ucate",
      tag: "UI/UX Design",
      description:
        "A Web-Based Platform Connecting Providers to Communities in Need",
      cta_link: "/projects/mobile-app",
      logoIcon: aiducate_logo,
      main_image: aiducate_main_image,
    },
    {
      id: 3,
      title: "E-commerce Platform",
      tag: "Product design",
      description: "End-to-end e-commerce platform design",
      cta_link: "/projects/ecommerce",
      logoIcon: unicare_logo,
      main_image: unicare_main_image,
    },
  ]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const getCardStyles = (index: number) => {
    const diff = (index - currentIndex + cards.length) % cards.length;
    if (diff === 0) {
      // Active card
      return {
        x: 0,
        scale: 1,
        opacity: 1,
        zIndex: 3,
      };
    } else if (diff === 1 || diff === -2) {
      // Right card
      return {
        x: 150,
        scale: 0.85,
        opacity: 0.6,
        zIndex: 2,
      };
    } else {
      // Left card
      return {
        x: -150,
        scale: 0.85,
        opacity: 0.6,
        zIndex: 1,
      };
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-8">
      <div className="relative h-[400px] flex items-center justify-center">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={false}
            animate={getCardStyles(index)}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            onClick={() => setCurrentIndex(index)}
            className="absolute w-full max-w-lg"
          >
            <div className="bg-black rounded-3xl p-6 h-full shadow-xl hover:shadow-2xl outline outline-[#CFEF00] outline-2 transition-all duration-300">
              <div className="flex space-x-6">
                {/* Textual Information Section */}
                <div className="w-1/2 space-y-4 text-left">
                  <img src={card?.logoIcon} />
                  <p className="text-sm">{card?.tag}</p>
                  <h3 className="font-medium text-3xl text-[#CFEF00]">
                    {card?.title}
                  </h3>
                  <p className="font-poppins font-normal">
                    {card?.description}
                  </p>
                  <Button className="rounded-full bg-[#CFEF00] text-black">
                    <Link to={card.cta_link}>View Case Study</Link>
                  </Button>
                </div>
                {/* Image Section */}
                <div className="w-1/2">
                  <img
                    src={card?.main_image}
                    alt={card.title}
                    className="rounded-lg w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 p-2 rounded-full z-10"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 p-2 rounded-full z-10"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index ? "bg-[#CFEF00]" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
