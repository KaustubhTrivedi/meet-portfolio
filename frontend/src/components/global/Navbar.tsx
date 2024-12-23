import { SlideTabsNav } from "../Navbar/Tabs";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="container mx-auto py-5 ">
      <div
        className="flex justify-between items-center h-16  relative text-white"
        role="navigation"
      >
        <div>Logo</div>
        <div className="">
          <SlideTabsNav />
        </div>
        <div>
          <Button className="rounded-full bg-[#CFEF00] text-black font-semibold hover:bg-[#b9d600]">
            Let's Connect
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
