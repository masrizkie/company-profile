'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-yellow-500 z-50">
      <div className="w-full max-w-[1440px] h-[54px] mx-auto px-16 flex items-center justify-between">
        {/* Logo */}
        <h1 className="font-bold text-xl text-white">Grand Horizon Property</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-lg text-white">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/teams">Teams</Link>
          <Link href="/blog">Blog</Link>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden text-3xl text-white focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden flex flex-col gap-4 p-4 bg-gray-300 shadow absolute top-[54px] left-0 w-full">
            <Link href="/"    onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about"    onClick={() => setOpen(false)}>About Us</Link>
            <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/teams"    onClick={() => setOpen(false)}>Teams</Link>
            <Link href="/blog"     onClick={() => setOpen(false)}>Blog</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
