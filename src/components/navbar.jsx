import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around w-full h-20 bg-yellow-500 items-center'>
        <div className='logo font-[cursive] font-extrabold uppercase'>
            <Link href={'/'}>Noobie</Link>
        </div>
        <div className='navbar-right flex justify-between w-60 '>
            <Link href={'/about'}>About</Link>
            <Link href={'/service'}>Service</Link>
            <Link href={'/contact'}>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar