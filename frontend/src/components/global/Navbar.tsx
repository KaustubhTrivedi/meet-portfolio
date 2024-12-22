const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div
        className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
        role="navigation"
      >
        <div>Home</div>
        <div>Projects</div>
        <div>About</div>
      </div>
    </div>
  );
};
export default Navbar;
