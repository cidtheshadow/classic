"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-[0_20px_40px_rgba(28,27,27,0.06)]">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-7xl mx-auto">
        <a className="font-headline text-2xl font-bold text-primary" href="#">Hotel The Classic</a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-medium" href="#about">About</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-medium" href="#rooms">Rooms</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-medium" href="#amenities">Amenities</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-medium" href="#restaurant">Restaurant</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-medium" href="#contact">Contact</a>
          <button className="heritage-gradient text-on-primary px-6 py-2 rounded shadow-sm hover:opacity-90 transition-opacity font-label font-semibold">Book Now</button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-surface absolute top-full left-0 w-full shadow-lg border-t border-outline-variant/20 flex flex-col py-4">
          <a className="px-6 py-3 text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors font-medium border-b border-outline-variant/10" href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a className="px-6 py-3 text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors font-medium border-b border-outline-variant/10" href="#rooms" onClick={() => setIsOpen(false)}>Rooms</a>
          <a className="px-6 py-3 text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors font-medium border-b border-outline-variant/10" href="#amenities" onClick={() => setIsOpen(false)}>Amenities</a>
          <a className="px-6 py-3 text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors font-medium border-b border-outline-variant/10" href="#restaurant" onClick={() => setIsOpen(false)}>Restaurant</a>
          <a className="px-6 py-3 text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors font-medium border-b border-outline-variant/10" href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          <div className="px-6 pt-4 pb-2">
            <button className="w-full heritage-gradient text-on-primary px-6 py-3 rounded shadow-sm hover:opacity-90 transition-opacity font-label font-semibold">Book Now</button>
          </div>
        </div>
      )}
    </nav>
  );
}
