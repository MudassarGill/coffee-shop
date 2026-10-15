import React from 'react'
import { useState } from 'react'
import { Menu, X } from "lucide-react";  



function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
  return (
        <nav className="bg-espresso text-cream">
            {/* main div */}
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-4 md:flex-row md:justify-between">
                {/* logo div */}
                <div className="w-0 md:w-auto">
                    <img className="h-16 w-16 bg-cover" src="src\assets\logo.png" alt="Coffee Shop Logo" />
                </div>
                {/* menu div */}
                <div className="flex gap-6 text-lg font-medium">
                    <a href="#" className="hover:text-orange/70">Home</a>
                    <a href="#" className="hover:text-orange/70">About</a>
                    <a href="#" className="hover:text-orange/70">Menu</a>
                    <a href="#" className="hover:text-orange/70">Contact</a>
                </div>
                {/* cart div */}
                <div>
                    <button className="rounded-full bg-orange px-4 py-2 text-lg font-medium text-cream hover:bg-orange/70">Cart</button>
                </div>
            </div>
        
        </nav>
  )
}
        

export default Navbar