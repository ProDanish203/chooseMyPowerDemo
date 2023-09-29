import AboutImg from "@/public/banner2.jpg";
import Image from "next/image";


export const About = () => {
  return (
    <div className='md:px-10 px-3 max-w-[1200px] w-full mx-auto flex items-center gap-10 max-md:flex-col-reverse'>
        <div className='flex-1 relative'>
            <Image src={AboutImg} alt="about us" width={1000} height={1000} className="object-contain rounded-md w-[1000px]"/>
        </div>

        <div className="flex-1">
            <h3 className="text-accent text-sm">Who we are</h3>
            
            <h2 className="md:text-5xl text-4xl font-bold mb-5 mt-2">
                Rated Energy Broker & Consulting Firm</h2>

            <p className="text-sm text-gray-600">
            As a leading energy broker, we've helped our clients save money on electricity and gas bills. We help businesses, whether large or small, create energy plans for their commercial electricity and gas needs. We have the experience and expertise to serve customers across multiple states and commodities.
            </p> 
            <br />

            <p className="text-sm text-gray-600">
            At Choose My Power LLC, we compare energy suppliers and get the best rate for you. In addition, we strive to offer customers customized solutions to meet a broad range of their energy needs.
            </p>

            <div className="mt-5">
                <div className="flex items-center justify-between gap-3">
                <div className="hover:bg-accent hover:text-white bg-secondary shadow-sm px-4 py-2.5 rounded-md flex items-center gap-3 max-sm:gap-4 justify-start">
                    <i className="fas fa-gear"></i>
                    <p className="max-sm:text-sm">Customized solutions</p>
                </div>

                <div className="hover:bg-accent hover:text-white bg-secondary shadow-sm px-4 py-2.5 rounded-md flex items-center gap-3 max-sm:gap-4 justify-start">
                    <i className="fas fa-info"></i>
                    <p className="max-sm:text-sm">Excellent support</p>
                </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                <div className="hover:bg-accent hover:text-white bg-secondary shadow-sm px-4 py-2.5 rounded-md flex items-center gap-3 max-sm:gap-4 justify-start">
                    <i className="fas fa-dollar"></i>
                    <p className="max-sm:text-sm">Guaranteed Savings</p>
                </div>

                <div className="hover:bg-accent hover:text-white bg-secondary shadow-sm px-4 py-2.5 rounded-md flex items-center gap-3 max-sm:gap-4 justify-start">
                    <i className="fas fa-hands"></i>
                    <p className="max-sm:text-sm">Trustable Experience </p>
                </div>
                </div>
            </div>

        </div>
    </div>
  )
}
