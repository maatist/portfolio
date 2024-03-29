
import { styles } from '../styles'

import React from 'react'

const Hero = () => {
  return (
    <section
      className='relative w-full mx-auto h-[300px] md:h-[400px] lg:h-[400px]'
    >
      <div className={`${styles.paddingX} absolute inset-0 top-16 md:top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1
            className={`${styles.heroHeadText} text-white`}
          >Hola, soy
            <span className='text-[#915eff]'> Matias</span>
          </h1>
          <p
            className={`${styles.heroSubText} text-white-100 mt-2}`}
          >
            Desarrollador de aplicaciones web, aplicaciones moviles <br
              className='sm:block hidden' />
            y blockchain.
          </p>

        </div>
      </div>
    </section>
  )
}

export default Hero