"use client";
import HeroesCards from "@/components/HeroesCards";
import { useContext } from "react";
import { HeroContext } from "../context/heroContext";

export default function Home() {
  const { hero } = useContext(HeroContext);

  return (
    <main className=" h-screen flex flex-col justify-around items-center max-h-full">
      <div className="uppercase text-5xl font-mono italic">
        Select {hero ? "enemy" : "your"} fighter
      </div>
      <HeroesCards />
      <div className="uppercase text-2xl font-mono italic">
        KOMBAT ZONE: SOUL CHAMBER
      </div>
    </main>
  );
}
