"use client"


import React from 'react'
import { motion } from 'framer-motion'

const AboutPage = () => {
  return (
    <motion.div className="h-full" 
    initial={{y:"-200vh"}}
     animate={{y:"0%"}}
     transition={{duration:1}}>

        {/* container  */}
      <div className=''>
            {/* text container  */}
        <div className='p-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-24 md:gap-12 lg:gap-24'>
              {/* biography */}
            <div className=''>
              <p> 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              harum quibusdam cupiditate nobis accusamus sed aut aperiam,
              reiciendis numquam! Voluptas voluptatibus obcaecati dolore itaque
              suscipit! Vel doloremque numquam quam nihil.

              </p>
              {/* biography quote  */}
              <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
             
            </div>

            {/* skills container  */}
            <div className=''>
                    skill container
            </div>

            {/* experiance Container  */}

            <div className=''>
                    experiance
            </div>


        </div>

      </div>



     </motion.div>
  )
}

export default AboutPage