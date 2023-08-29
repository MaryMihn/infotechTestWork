import Image from "next/image";
import heroes from "../data";

export default function HeroesCards() {
  return (
    <div className=" mx-auto  bg-red-600  grid grid-cols-5 border-collapse border border-slate-400" >
      {heroes?.map((hero) => (
        <div className=" border-4 border-slate-600 ">
     <Image key={hero.id} alt={hero.title} src={hero.img} width={140} height={120} />
        </div>

      ))}
    </div>
  );
}
