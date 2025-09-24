import { RiDeleteBinLine } from "react-icons/ri";

const SelectedPlayer = ({ purchasedPlayers, removePlayer, setToggle ,toggle}) => {
  console.log(purchasedPlayers);
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col gap-4 pb-32">
      {purchasedPlayers.map((purchasePlayer, index) => (
        <div key={index} className="flex items-center justify-between border-zinc-200 border-1 shadow-lg rounded-xl p-3">
          <div className="flex items-center gap-3">
            <div className="w-15 h-15 bg-red-500 rounded-lg overflow-hidden">
              <img src={purchasePlayer.player_image} className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="font-bold">{purchasePlayer.player_name}</h1>
              <p className="text-xs opacity-70">{purchasePlayer.playing_role}</p>
            </div>
          </div>
          <span className="p-2 hover:bg-zinc-100 cursor-pointer rounded-lg text-2xl" onClick={()=>{removePlayer(purchasePlayer)}}><RiDeleteBinLine /></span>
        </div>
      ))}
      <button
            onClick={() => setToggle(true)}
            className="border-2 border-r-0 w-fit border-zinc-100 rounded-lg px-5 py-2 cursor-pointer bg-[#E7FE29] font-bold mt-10"
          >
            Add more Players
          </button>
    </div>
  );
};

export default SelectedPlayer;
