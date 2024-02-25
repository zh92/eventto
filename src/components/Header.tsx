"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Logo from './logo'

const routes = [
    {
        name: "Home",
        path: "/",        
    },
    {
        name: "All events",
        path: "/events/all"
    }
]

export default function Header() {
    const activePathname = usePathname();

    return (
    <header className="flex items-center justify-between 
        border-b border-white/10 h-14 px-3 md:px-9">
        <Logo />
        <nav className='h-full'>
            <ul className='flex gap-x-6 h-full text-sm'>
                {routes.map((route) => (
                    <li key={route.path} 
                        className={clsx("hover:text-white flex items-center relative transition", {
                        "text-white": activePathname === route.path,
                        "text-white/50": activePathname !== route.path
                        })}
                    > 
                        <Link href={route.path}>{route.name}</Link>
                        {activePathname === route.path && ( 
                        <motion.div layoutId="header-active-div" className='bg-accent h-1 w-full absolute bottom-0'></motion.div> 
                        )}
                    </li>
                ))}
            </ul>
        </nav>

    </header>
)}