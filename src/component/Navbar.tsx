import React from 'react'
import Link from 'next/link';
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'>Tabia Nadir</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <Link href='#hero'>Home</Link>
                <Link href='#about'>About</Link>
                <Link href='#projects'>Projects</Link>
                <Link href='#skills'>Skills</Link>
                <Link href='#contact'>Contact</Link>
            </ul>
            <IoIosMenu className='md:hidden' size={30} />
        </div>
      
    </div>
  );
};

export default Navbar;
