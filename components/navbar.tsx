'use client'
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"


export const Navbar = ()=>{
    const [isNavOpen, setIsNavOpen] = useState(false)
    return (
        <nav className="fixed top-0 w-full z-50 glass border-b border-green-100">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-green-600 p-2 rounded-xl shadow-lg shadow-green-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div>
                            <span className="block text-xl font-bold tracking-tight">EV Odisha</span>
                            <span className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-green-700">Drive the Future</span>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
                        <a href="#" className="hover:text-green-600 transition-colors">Home</a>
                        <a href="#incentives" className="hover:text-green-600 transition-colors">Subsidies</a>
                        <a href="#charging" className="hover:text-green-600 transition-colors">Charging</a>
                        <a href="#benefits" className="hover:text-green-600 transition-colors">Benefits</a>
                        <Link href={"/register-ev"}>
                            <button className="bg-green-600 text-white px-6 py-2.5 rounded-full font-bold shadow-xl shadow-green-200 hover:bg-green-700 transition-all active:scale-95">Register EV</button>
                        </Link>
                    </div>
        
                    <div className="flex md:hidden">
                        <div className="hover:bg-black/10 rounded-full p-3 cursor-pointer transition-all" onClick={()=>setIsNavOpen(!isNavOpen)}>
                            {isNavOpen?"X":
                                <Image src={"/assets/hamburger.png"} alt="hamburger navbar icon" height={20} width={20}/>
                            }
                        </div>
                    </div>
                    {
                        isNavOpen &&(
                            <div className="absolute flex md:hidden flex-col justify-center gap-7 p-10 right-0 items-center top-20 w-screen bg-white rounded-b-2xl">

                                <a href="#" className="hover:text-green-600 transition-colors">Home</a>
                                <a href="#incentives" className="hover:text-green-600 transition-colors">Subsidies</a>
                                <a href="#charging" className="hover:text-green-600 transition-colors">Charging</a>
                                <a href="#benefits" className="hover:text-green-600 transition-colors">Benefits</a>
                                <Link href={"/register-ev"}>
                                    <button className="bg-green-600 text-white px-6 py-2.5 rounded-full font-bold shadow-xl shadow-green-200 hover:bg-green-700 transition-all active:scale-95">Register EV</button>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </nav>
    )
}