import { use } from "react";
import PlayerCard from "./PlayerCard";

const AvailablePlayer = ({ playerPromise, availableBalance, setavailableBalance, purchasedPlayers, setpurchasedPlayers}) => {
  const playerData = use(playerPromise);
  return (
    <div className="max-w-[1200px] mx-auto mt-5 grid md:grid-cols-3 grid-cols-1 gap-4 pb-32">
      {playerData.map((player, index) => (
        <PlayerCard key={index} player={player} availableBalance={availableBalance} setavailableBalance={setavailableBalance} purchasedPlayers={purchasedPlayers} setpurchasedPlayers={setpurchasedPlayers}/>
      ))}
    </div>
  );
};

export default AvailablePlayer;
