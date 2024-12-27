import { Button } from "../ui/button";

const WhoAmI = () => {
  return (
    <div className="space-y-20">
      <div className="text-2xl font-medium">
        <p>User experience designer based in Dublin, Ireland</p>
        <p>I make creative & user-friendly designs that are pretty amazing</p>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <div className="relative">
          <div className="absolute inset-0 animate-breath rounded-full bg-[#CFEF00] blur-xl"></div>
          <img
            src="https://placehold.co/200x200"
            className="relative rounded-full mb-10"
          />
        </div>
        <Button className="rounded-full bg-[#CFEF00] hover:bg-[#b9d600] font-medium hover:shadow-2xl text-black">
          Know more about me
        </Button>
      </div>
    </div>
  );
};
export default WhoAmI;
