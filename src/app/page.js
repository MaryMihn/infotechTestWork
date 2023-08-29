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
    <main className=" h-screen flex flex-col justify-around items-center  bg-gray-600">
      <div className="uppercase text-5xl font-mono italic">
        Select {hero ? "enemy" : "your"} fighter
      </div>
      <div className="  flex  ">
        <Image
          alt="left"
          src="/pictures/left.png"
          width={300}
          height={300}
          className={`${hero ? `animate-none` : `animate-bounce`}`}
        />
        <HeroesCards />

        <Image
          alt="right"
          src="/pictures/right.png"
          width={300}
          height={300}
          className={`${hero && !enemy ? "animate-bounce" : "animate-none"}`}
        />
      </div>

      <div className="uppercase text-2xl font-mono italic">
        KOMBAT ZONE: SOUL CHAMBER
      </div>
    </main>
  );
}
