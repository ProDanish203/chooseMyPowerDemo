import Link from 'next/link'
import React from 'react'
import { navLinks } from "@/util/data";

export const Header = () => {
  return (
    <>
    <header className='py-4 md:px-16 px-5 bg-transparent fixed w-full shadow-sm flex items-center justify-between gap-3'>
        <div className="logo">
            <h2 className='text-3xl font-bold text-primary cursor-pointer'>LOGO</h2>
        </div>

        <nav className='flex items-center justify-between gap-3'>
            {navLinks.map((link, i) => (
                <Link href={link.path}
                key={i}
                className='hover:text-primary text-white font-medium text-md'
                >{link.name}</Link>
            ))}
        </nav>
    </header>
    </>
  )
}
