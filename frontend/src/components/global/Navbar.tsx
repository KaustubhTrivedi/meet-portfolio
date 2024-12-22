import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div
        className="flex justify-between items-center h-16 bg-white text-black relative"
        role="navigation"
      >
        <div>Logo</div>
        <div className="flex space-x-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to={"/project"}>Projects</NavLink>
          <NavLink to={"/about"}>About Me</NavLink>
        </div>
        <div>CTA</div>
      </div>
    </div>
  );
};
export default Navbar;
