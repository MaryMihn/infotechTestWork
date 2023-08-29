"use client";
import HeroesCards from "@/components/HeroesCards";
import { useContext } from "react";
import { HeroContext } from "../context/heroContext";
import Image from "next/image";

export default function Home() {
  const { hero } = useContext(HeroContext);

  console.log(hero, "hero")

  return (
    <main className=" h-screen flex flex-col justify-around items-center max-h-full bg-gray-600">
      <div className="uppercase text-5xl font-mono italic">
        Select {hero ? "enemy" : "your"} fighter
      </div>
      <div className="  flex  ">
      <Image
            alt="k k k"
            src="/pictures/left.png"
            width={300}
            height={300}
            className={`${hero?   `animate-none` : `animate-bounce`}`}
          />
      <HeroesCards />

      <Image
            alt="k k k"
            src="/pictures/right.png"
            width={300}
            height={300}
            className={`${hero ? "animate-bounce" : "animate-none"}`}
          />


      </div>
    
      <div className="uppercase text-2xl font-mono italic">
        KOMBAT ZONE: SOUL CHAMBER
      </div>
    </main>
  );
}
