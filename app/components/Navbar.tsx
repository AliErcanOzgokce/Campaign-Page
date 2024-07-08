import React from 'react'
import Image from 'next/image'
import nativerse from '../assets/nativerse.svg'

function Navbar() {
  return (
    <div className='flex items-center justify-center p-5 max-[780px]:py-10'>
      <Image src={nativerse} alt='nativerse' width={300} height={300} />
    </div>
  )
}

export default Navbar
