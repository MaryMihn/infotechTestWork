"use client"
import Image from "next/image";

import HeroesCards from "@/components/HeroesCards";
import { useState } from "react";

export default function Home() {

  const [hero, setHero]= useState()
  const [enemy, setEnemy]= useState()

  return (
    <main className=" h-screen flex flex-col justify-around items-center max-h-full" >
      <div className="uppercase text-5xl font-mono italic" >
Select {hero ? "your" : "enemy"} fighter
      </div>
<HeroesCards/>
<div className="uppercase text-2xl font-mono italic">
KOMBAT ZONE: SOUL CHAMBER
</div>
    </main>
  );
}
