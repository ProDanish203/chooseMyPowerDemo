"use client"
import CountUp from "react-countup";
import { stats } from "@/util/data";

export const Counter = () => {
  return (
    <div className="bg-counter bg-center bg-fixed bg-no-repeat bg-cover flex flex-wrap max-sm:flex-col items-center justify-center gap-4 w-full md:py-10 py-4 md:px-10 px-3 bg-secondary">
        
      {stats.map((stat, i) => (
        <div key={i}
        className=""
        >
          <h2 className="text-white text-4xl font-extrabold text-center rounded-full p-5 w-[150px] h-[70px] flex items-center justify-center">
            <CountUp
            enableScrollSpy
            duration={5}
            end={stat.value}
            />
            +
          </h2>
          <h4 className="text-center text-white text-xl">{stat.title}</h4>
        </div>
      ))}

    </div>
  )
}
