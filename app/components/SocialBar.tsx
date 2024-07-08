import React from 'react'
import twitter from '../assets/twitter.svg'
import Image from 'next/image'

function SocialBar() {
  return (
    <div className='flex w-full justify-end p-5 max-sm:hidden'>
      <Image src={twitter} alt='twitter' width={30} height={30} />
    </div>
  )
}

export default SocialBar
