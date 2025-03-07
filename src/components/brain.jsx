import Image from 'next/image'
import React from 'react'

const Brain = () => {
  return (
    <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/avatar.png"
            alt="shahzad akram"
            fill
            className="object-contain"
          />
        </div>
  )
}

export default Brain