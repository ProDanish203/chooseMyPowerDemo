"use client"
import Link from 'next/link'
import { navLinks } from "@/util/data";
import { useEffect, useState } from 'react';

export const Header = () => {

  const [scrolled, setScrolled] = useState(false)

  const checkScroll = () => {
    window.scrollY >= 150 ? setScrolled(true) : setScrolled(false); 
  }

  useEffect(() => {
    window.addEventListener("scroll", checkScroll)    

    return () => window.removeEventListener("resize", checkScroll)    
  }, [])

  return (
    <>
    <header className={`py-4 md:px-16 px-5 z-50 ${scrolled ? "bg-gray-900": "bg-transparent"} fixed w-full shadow-sm flex items-center justify-between gap-3`}>
        <div className="logo">
            <h2 className='text-3xl font-bold text-primary cursor-pointer'>LOGO</h2>
        </div>

        <nav className='flex items-center justify-between gap-3'>
            {navLinks.map((link, i) => (
                <Link href={link.path}
                key={i}
                className={`hover:text-primary text-white font-medium text-md`}
                >{link.name}</Link>
            ))}
        </nav>
    </header>
    </>
  )
}
