import Image from "next/image";
import { useContext } from "react";
import { HeroContext } from "../context/heroContext";
import { EnemyContext } from "@/context/enemyContext";
const HeroCard = ({
  fighter,
  index,
  selectedFighterIndexPlayer2,
  selectedFighterIndexPlayer1,
}) => {
  const { hero } = useContext(HeroContext);
  const { enemy } = useContext(EnemyContext);

  return (
    <div
      key={fighter.id}
      className={`border p-4 cursor-pointer relative lg:w-32 lg:h-36 ${
        index === selectedFighterIndexPlayer1
          ? `border-green-500 border-8  ${
              !hero ? "animate-bounce" : "animate-none"
            }`
          : index === selectedFighterIndexPlayer2
          ? `border-red-500 border-8 ${
              hero && !enemy ? "animate-bounce" : "animate-none"
            }`
          : "border-2 border-gray-700 "
      }`}
    >
      <Image alt={fighter.title} src={fighter.img} fill  />
    </div>
  );
};

export default HeroCard;
