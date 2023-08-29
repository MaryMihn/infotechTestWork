"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function VS() {
    const router = useRouter();
    const [timerFinished, setTimerFinished] = useState(false);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //       setTimerFinished(true);
    //     }, 4000); // 4 секунди
    
    //     return () => clearTimeout(timer);
    //   }, []);
    
    //   useEffect(() => {
    //     if (timerFinished) {
    //       router.push("/"); 
    //     }
    //   }, [timerFinished]);

  return (
    <main className=" bg-my_bg_image h-screen bg-cover  flex flex-col items-center justify-between p-5 ">
      <div className="text-gray-600 uppercase text-5xl font-mono italic flex flex-col justify-around items-center">
        <div>Battle</div>
        <div>1</div>
      </div>
      <div className="text-gray-300 uppercase text-9xl font-mono italic">
        VS
      </div>
      <div>
        <div className="flex gap-0.5 ">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <button
              key={index}
              className="bg-black   border-gray-400 border-2 font-semibold py-2 px-4  relative w-14 h-14"
            >
              <Image
                alt="k k k"
                src="/pictures/icon.png"
                fill
   
                className=" object-cover"

              />
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
