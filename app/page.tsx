import { Heading } from "@/components/helpers";
import { Counter, Hero } from "@/components/shared";
import { Providers } from "@/components/shared/Providers";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <main>
      <ToastContainer/>
      <Hero/>

      <div className="my-5">
        <Heading title="Meet Our Providers"/>
        <Providers/>
      </div>

      <Counter/>
    </main>
  )
}
