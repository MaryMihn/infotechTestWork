import Image from "next/image";
import heroes from "../data";

import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { HeroContext } from "../context/heroContext";

const HeroesCards = () => {
  const { chooseHero } = useContext(HeroContext);

  const rows = 3;
  const columns = 5;
  const totalFighters = rows * columns;

  const [selectedFighterIndexPlayer1, setSelectedFighterIndexPlayer1] =
    useState(0);
  const [selectedFighterIndexPlayer2, setSelectedFighterIndexPlayer2] =
    useState(-1);

  const router = useRouter();

  const handleKeyPress = (e) => {
    if (e.key === "ArrowUp") {
      if (selectedFighterIndexPlayer2 === -1) {
        setSelectedFighterIndexPlayer1(
          selectedFighterIndexPlayer1 >= columns
            ? selectedFighterIndexPlayer1 - columns
            : selectedFighterIndexPlayer1
        );
      } else {
        setSelectedFighterIndexPlayer2(
          selectedFighterIndexPlayer2 >= columns
            ? selectedFighterIndexPlayer2 - columns
            : selectedFighterIndexPlayer2
        );
      }
    } else if (e.key === "ArrowDown") {
      if (selectedFighterIndexPlayer2 === -1) {
        setSelectedFighterIndexPlayer1(
          selectedFighterIndexPlayer1 < totalFighters - columns
            ? selectedFighterIndexPlayer1 + columns
            : selectedFighterIndexPlayer1
        );
      } else {
        setSelectedFighterIndexPlayer2(
          selectedFighterIndexPlayer2 < totalFighters - columns
            ? selectedFighterIndexPlayer2 + columns
            : selectedFighterIndexPlayer2
        );
      }
    } else if (e.key === "ArrowLeft") {
      if (selectedFighterIndexPlayer2 === -1) {
        setSelectedFighterIndexPlayer1(
          selectedFighterIndexPlayer1 > 0
            ? selectedFighterIndexPlayer1 - 1
            : selectedFighterIndexPlayer1
        );
      } else {
        setSelectedFighterIndexPlayer2(
          selectedFighterIndexPlayer2 > 0
            ? selectedFighterIndexPlayer2 - 1
            : selectedFighterIndexPlayer2
        );
      }
    } else if (e.key === "ArrowRight") {
      if (selectedFighterIndexPlayer2 === -1) {
        setSelectedFighterIndexPlayer1(
          selectedFighterIndexPlayer1 < totalFighters - 1
            ? selectedFighterIndexPlayer1 + 1
            : selectedFighterIndexPlayer1
        );
      } else {
        setSelectedFighterIndexPlayer2(
          selectedFighterIndexPlayer2 < totalFighters - 1
            ? selectedFighterIndexPlayer2 + 1
            : selectedFighterIndexPlayer2
        );
      }
    } else if (e.key === "Enter") {
      if (selectedFighterIndexPlayer2 === -1) {
        setSelectedFighterIndexPlayer2(selectedFighterIndexPlayer1 + 1);
        chooseHero(selectedFighterIndexPlayer1+1);
        setAnimateGreenBorder(false);
      } else if (selectedFighterIndexPlayer1 !== selectedFighterIndexPlayer2) {
        setAnimateRedBorder(false)
        setTimeout(() => {
          router.push("/vs");
        }, 2000);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [selectedFighterIndexPlayer1, selectedFighterIndexPlayer2]);

  const [animateGreenBorder, setAnimateGreenBorder] = useState(true);
  const [animateRedBorder, setAnimateRedBorder] = useState(true);

  return (
    <div className="grid grid-cols-5 gap-1 ">
      {heroes.map((fighter, index) => (
        <div
          key={fighter.id}
        className={`border p-4 cursor-pointer ${
            index === selectedFighterIndexPlayer1
              ? `border-green-500 border-8  ${
                  animateGreenBorder ? "animate-bounce" : "animate-none"
                }`
              : index === selectedFighterIndexPlayer2
              ? `border-red-500 border-8 ${
                  animateRedBorder ? "animate-bounce" : "animate-none"
                }`
              : "border-transparent"
          }`}
        >
          <Image
            alt={fighter.title}
            src={fighter.img}
            width={100}
            height={100}
          />
        </div>
      ))}
    </div>
  );
};

export default HeroesCards;
