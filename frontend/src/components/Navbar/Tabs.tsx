import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router";

export const SlideTabsNav = () => {
  return (
    <div className="p-2 border-2 border-[#CFEF00] text-white font-semibold border-solid rounded-full">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2  p-1"
    >
      <Tab setPosition={setPosition}>
        <NavLink to="/">Home</NavLink>
      </Tab>
      <Tab setPosition={setPosition}>
        <NavLink to={"/projects"}>Projects</NavLink>
      </Tab>
      <Tab setPosition={setPosition}>
        <NavLink to={"/about"}>About Me</NavLink>
      </Tab>

      <Cursor position={position} />
    </ul>
  );
};

interface TabProps {
  children: React.ReactNode;
  setPosition: React.Dispatch<
    React.SetStateAction<{ left: number; width: number; opacity: number }>
  >;
}

const Tab: React.FC<TabProps> = ({ children, setPosition }) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

interface CursorProps {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
}

const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-[#CFEF00] text-black font-semibold md:h-12"
    />
  );
};
