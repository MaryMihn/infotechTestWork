"use client";
import HeroesCards from "@/components/HeroesCards";
import { useContext } from "react";
import { HeroContext } from "../context/heroContext";
import Image from "next/image";
import { EnemyContext } from "../context/enemyContext";

export default function Home() {
  const { hero } = useContext(HeroContext);

  const { enemy } = useContext(EnemyContext);

  return (
    <main className=" h-screen flex flex-col justify-around items-center  bg-gray-600 font-['mortalKombat'] italic">
      <div className="uppercase text-5xl ">
        Select {hero ? "enemy" : "your"} fighter
      </div>

      <div className="flex justify-around items-end">
        <div className="lg:w-56 w-1/4">
          <Image
            alt="left"
            src="/pictures/left.png"
            width={300}
            height={300}
            className={`${
              hero ? `animate-none` : `animate-bounce`
            } w-full h-300`}
          />
        </div>

        <HeroesCards />

        <div className="lg:w-56 w-1/4 items-end">
          <Image
            alt="right"
            src="/pictures/right.png"
            width={100}
            height={500}
            className={`${
              hero && !enemy ? "animate-bounce" : "animate-none"
            } w-full h-500`}
          />
        </div>
      </div>
      <div className="uppercase text-2xl ">KOMBAT ZONE: SOUL CHAMBER</div>
    </main>
  );
}
