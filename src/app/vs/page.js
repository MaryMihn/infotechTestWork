"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Icons from "@/components/Icons";

export default function VS() {
  const router = useRouter();
  const [timerFinished, setTimerFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerFinished(true);
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (timerFinished) {
      router.push("/");
    }
  }, [timerFinished]);

  return (
    <main className=" bg-my_bg_image h-screen bg-cover  flex flex-col items-center justify-between p-5 ">
      <div className="text-gray-600 uppercase text-5xl font-mono italic flex flex-col justify-around items-center">
        <div>Battle</div>
        <div>1</div>
      </div>
      <div className="text-gray-300 uppercase text-9xl font-mono italic shadow-md">
        VS
      </div>
      <div>
        <div className="flex gap-0.5 ">
          <Icons />
        </div>
      </div>
    </main>
  );
}
