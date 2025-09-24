import logo from "../assets/logo.png";
import dollarImg from "../assets/dollar-1.png"

const Navbar = ({availableBalance}) => {
  return (
    <div className="navbar px-20 border-b-1 border-zinc-100">
      <div className="flex-1">
        <a className=" text-xl">
          <img className="w-[60px] h-[60px]" src={logo} alt="" />
        </a>
      </div>
      <div className="flex items-center font-bold">
        <span className="mr-1 ">{availableBalance}</span>
        <span className="mr-1"> Coin</span>
        <img src={dollarImg} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
