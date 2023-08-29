"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { images } from "../data";
import { buttons } from "../data";

export default function Icons() {
  const [iconQ, setIconQ] = useState(0);
  const [iconW, setIconW] = useState(0);
  const [iconE, setIconE] = useState(0);
  const [iconR, setIconR] = useState(0);
  const [iconT, setIconT] = useState(0);
  const [iconY, setIconY] = useState(0);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const randomIcon = () => {
    return Math.floor(Math.random() * images.length);
  };

  const handleKeyPress = (e) => {
    switch (e.key.toLowerCase()) {
      case buttons[0]:
        setIconQ(randomIcon());
        break;
      case buttons[1]:
        setIconW(randomIcon());
        break;
      case buttons[2]:
        setIconE(randomIcon());
        break;
      case buttons[3]:
        setIconR(randomIcon());
        break;
      case buttons[4]:
        setIconT(randomIcon());
        break;
      case buttons[5]:
        setIconY(randomIcon());
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex gap-0.5 ">
      <button className="bg-black   border-gray-400 border-2 font-semibold py-2 px-4  relative w-14 h-14">
        <Image alt="k k k" src={images[iconQ]} fill sizes="100vw" />
      </button>

      <button
        className="bg-black   border-gray-400 border-2 font-semibold py-2 px-4  relative w-14 h-14"
        onClick={() => console.log(index)}
      >
        <Image alt="k k k" src={images[iconW]} fill sizes="100vw" />
      </button>

      <button className="bg-black   border-gray-400 border-2 font-semibold py-2 px-4  relative w-14 h-14">
        <Image alt="k k k" src={images[iconE]} fill sizes="100vw" />
      </button>

      <button className="bg-black   border-gray-400 border-2 font-semibold py-2 px-4  relative w-14 h-14">
        <Image alt="k k k" src={images[iconR]} fill sizes="100vw" />
      </button>

      <button className="bg-black   border-gray-400 border-2 font-semibold py-2 px-4  relative w-14 h-14">
        <Image alt="k k k" src={images[iconT]} fill sizes="100vw" />
      </button>

      <button className="bg-black   border-gray-400 border-2 font-semibold py-2 px-4  relative w-14 h-14">
        <Image alt="k k k" src={images[iconY]} fill sizes="100vw" />
      </button>
    </div>
  );
}
