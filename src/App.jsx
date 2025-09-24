import { Suspense, useState } from "react";
import Navbar from "./components/Navbar";
import AvailablePlayer from "./components/AvailablePlayer";
import SelectedPlayer from "./components/SelectedPlayer";
import { ToastContainer } from "react-toastify";
import BgImg from "./assets/bg-shadow.png";
import BannerImg from "./assets/banner-main.png";
import FooterLogo from "./assets/logo-footer.png";

const fetchPlayer = async () => {
  const res = await fetch("./players.json");
  return res.json();
};

const playerPromise = fetchPlayer();

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setavailableBalance] = useState(6000000);
  const [purchasedPlayers, setpurchasedPlayers] = useState([]);

  const removePlayer = (player) => {
    const filterData = purchasedPlayers.filter(
      (ply) => ply.player_name !== player.player_name
    );

    setpurchasedPlayers(filterData);
    setavailableBalance(
      availableBalance +
        parseInt(player.price.split("USD").join("").split(",").join(""))
    );
  };

  return (
    <div className="bg-white font-sora">
      <Navbar availableBalance={availableBalance} />
      <div
        className="bg-cover bg-black flex items-center justify-center h-[70 vh] rounded-2xl mt-5 w-[1200px] mx-auto text-white text-center py-10"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="flex items-center flex-col justify-center gap-4">
          <img src={BannerImg} className="w-[200px]" />
          <h1 className="text-4xl font-semibold ">
            Assemble Your Ulitmate Dream 11 Cricket Team
          </h1>
          <p className="text-xl opacity-70">Beyond Boundaris Beyond Limits</p>
          <button className="btn bg-[#E7FE29] text-lg font-semibold border-none py-6">
            Claim Free Credit
          </button>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto  flex items-center justify-between mt-15 py-2">
        <h1 className="font-bold text-2xl">
          {toggle
            ? `Available Players`
            : `Selected Players ( ${purchasedPlayers.length}/6 )`}
        </h1>
        {/* bg-[#E7FE29] */}
        <div>
          <button
            onClick={() => setToggle(true)}
            className={`border-2 border-r-0 border-zinc-100 rounded-l-lg px-5 py-2 cursor-pointer ${
              toggle === true ? "bg-[#E7FE29] font-bold" : "opacity-70"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`border-2 border-l-0 border-zinc-100 rounded-r-lg px-5 py-2 cursor-pointer ${
              toggle === false ? "bg-[#E7FE29] font-bold" : "opacity-70"
            }`}
          >
            Selected <span>({purchasedPlayers.length})</span>
          </button>
        </div>
      </div>
      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AvailablePlayer
            playerPromise={playerPromise}
            availableBalance={availableBalance}
            setavailableBalance={setavailableBalance}
            purchasedPlayers={purchasedPlayers}
            setpurchasedPlayers={setpurchasedPlayers}
          />
        </Suspense>
      ) : (
        <SelectedPlayer
          purchasedPlayers={purchasedPlayers}
          setpurchasedPlayers={setpurchasedPlayers}
          removePlayer={removePlayer}
          setToggle={setToggle}
          toggle={toggle}
        />
      )}
      <div className="bg-[#06091A] relative w-full h-[100vh] flex items-center flex-col justify-center mt-20 gap-16 text-white">
        <div
          className="bg-cover absolute bg-zinc-50 border border-zinc-300 rounded-xl w-2/3 h-[35vh] mx-auto  top-0 left-1/2 -translate-x-1/2  text-center flex flex-col gap-3 justify-center -translate-y-1/2 text-black"
          style={{ backgroundImage: `url(${BgImg})` }}
        >
          <h1 className="text-2xl font-bold">Subscribe to our Newsletter</h1>
          <p className="text-md opacity-70">
            Get the latest updates and news right in your inbox!
          </p>
          <div >
            <input
              type="text"
              placeholder="Enter Your Email"
              className="input input-neutral w-70 mr-3 border-zinc-300"
            />
            <button className="btn bg-gradient-to-r from-[rgba(199,38,156,0.71)] to-[rgba(252,241,141,0.92)] font-bold text-md">
              Subscribe
            </button>
          </div>
        </div>
        <img src={FooterLogo} alt="" />
        <div className="flex items-center justify-between gap-10">
          <div className=" w-1/3">
            <h2>About Us</h2>
            <p className="text-sm opacity-50 w-1/2 mt-3">
              We are a passionate team dedicate to providing the best services
              to our customers
            </p>
          </div>
          <div className=" w-1/3">
            <h2 className="mb-3">Quick Links</h2>
            <ul className="pl-5">
              <li className="list-disc opacity-50 text-sm mb-2">Home</li>
              <li className="list-disc opacity-50 text-sm mb-2">Services</li>
              <li className="list-disc opacity-50 text-sm mb-2">About</li>
              <li className="list-disc opacity-50 text-sm mb-2">Contact</li>
            </ul>
          </div>
          <div>
            <h2>Subscribe</h2>
            <p className="text-sm opacity-50 my-3 w-[80%]">Subscribe to our newsletter for the lates updates.</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="input input-neutral w-60 border-zinc-300 rounded-r-none border-none outline-none text-black"
              />
              <button className="btn bg-gradient-to-r from-[rgba(199,38,156,0.71)] to-[rgba(252,241,141,0.92)] font-bold text-md rounded-l-none border-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-5 bg-[#06091A] border-t-1 border-zinc-600 text-white text-center">
          <p className="text-sm">@2025 Your Company All Rights Reserved.</p>
      </div>
      <ToastContainer />
    </div> 
  );
};

export default App;
