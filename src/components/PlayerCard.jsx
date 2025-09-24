import userImg from "../assets/user-1.png";
import reportImg from "../assets/report-1.png";
import { useState } from "react";
import { toast } from "react-toastify";

const PlayerCard = ({
  player,
  availableBalance,
  setavailableBalance,
  purchasedPlayers,
  setpurchasedPlayers,
}) => {

  const [isSelected, setisSelected] = useState(false);

  const handleSelected = (playerData) => {
    const playerPrice = parseInt(
      playerData.price.split("USD").join("").split(",").join("")
    );
    if (availableBalance < playerPrice) {
      toast("Not Enough Balance!!");
      return;
    }
    if (purchasedPlayers.length === 6 ) {
        toast("You already Purchase 6 Players!!")
        return;
    }
    setisSelected(true);
    setavailableBalance(availableBalance - playerPrice);

    setpurchasedPlayers([...purchasedPlayers, playerData]);
  };

  return (
    <div className="card bg-base-100 w-96 shadow-sm p-5">
      <div className="rounded-lg w-full h-[240px] overflow-hidden">
        <img
          src={player.player_image}
          alt="Shoes"
          className="object-cover w-full h-full object-"
        />
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-3 pb-3">
          <img src={userImg} className="opacity-50" />
          <h2 className="card-title ">{player.player_name}</h2>
        </div>
        <div className="flex justify-between pb-2 border-b-1 mb-2 border-zinc-100">
          <span className="flex items-center gap-3 text-sm">
            <img src={reportImg} alt="" />
            {player.player_country}
          </span>
          <button className="btn uppercase font-medium  text-xs">{player.playing_role}</button>
        </div>
        <h2 className="font-medium  pb-1 text-sm opacity-90">Rating : {player.rating}</h2>
        <div className="flex items-center justify-between text-sm opacity-90">
          <p className="font-medium  pb-1">{player.bating_style}</p>
          <p className="font-medium  pb-1">{player.bowling_style}</p>
        </div>
        <div className="flex items-center justify-between text-sm opacity-90">
          <p className="font-medium pb-1">Price : ${player.price}</p>
          <button
            disabled={isSelected}
            onClick={() => handleSelected(player)}
            className="btn"
          >
            {!isSelected ? "Choose Player" : "Selected"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
