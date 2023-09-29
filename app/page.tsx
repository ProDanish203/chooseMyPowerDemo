import { Heading } from "@/components/helpers";
import { About, Contact, Counter, Hero } from "@/components/shared";
import { Providers } from "@/components/shared/Providers";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <main>
      <ToastContainer/>
      <Hero/>

      <div className="my-10">
        <Heading title="Meet Our Providers"/>
        <Providers/>
      </div>

      <div className="my-10">
        <Heading title="About us"/>
        <About/>
      </div>

      <Counter/>
      
      <div className="my-10">
        <Heading title="Contact Us"/>
        <Contact/>
      </div>


    </main>
  )
}
