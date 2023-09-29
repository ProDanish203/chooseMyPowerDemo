"use client"
import { FormEvent, useState } from "react"
import { toast } from "react-toastify";

export const Hero = () => {

  const [zip, setZip] = useState("");
  const [type, setType] = useState("business");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if(!zip || zip.match(/^[0-9]+$/) == null || zip.length != 5) return toast.error("Please provide a valid zip code"); 

    console.log("zip: " + zip);
    console.log("type: " + type)

  }


  return (
    <div className='pt-20 flex items-center justify-center flex-col md:px-10 px-4 w-screen min-h-screen bg-heroBanner bg-center bg-cover bg-no-repeat'>
      
      <div>
        <h1 className="md:text-6xl sm:text-4xl text-3xl text-center font-bold text-bg">Find the best electric <br /> rates offered to your home and business</h1>
      </div>

      <form
      onSubmit={handleSubmit}
      className="my-10 flex max-md:flex-col gap-2">
        <div className="bg-bg py-2 px-2 rounded-md">
          <i className="fas fa-location-dot text-primary text-2xl "></i>
          <input type="text" 
          className="text-text px-2 outline-none md:text-xl text-lg"
          value={zip}
          onChange={(e: any) => setZip(e.target.value)}
          placeholder="ZIP Code"
          />
        </div>

        <div>
          <select name="type" onChange={(e: any) => setType(e.target.value)} id="type"
          className="text-text px-2 py-2.5 outline-none md:text-xl text-lg bg-bg rounded-md w-full min-w-[200px]"
          >
            <option value="business">Business</option>
            <option value="residential">Residential</option>
          </select>
        </div>

        <div>
          <button className="bg-primary text-bg rounded-md py-2.5 px-4 w-full flex gap-2 items-center"
          type="submit"
          >
            <i className="fas fa-magnifying-glass"></i>
            Search
          </button>
        </div>

      </form>

    </div>
  )
}
