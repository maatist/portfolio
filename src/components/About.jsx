import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { sectionWraper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className='xs:w-[250px] w-full'
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.25 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3
            className='text-white text-[20px] font-bold text-center'
          >{title}</h3>
        </div>
      </motion.div>
    </Tilt>

  )
}

const About = () => {
  return (
    <>
      <p className={styles.sectionSubText}>Introduccion.</p>
      <h2 className={styles.sectionHeadText} >Vista general.</h2>


      <div className='mt-4 text-secondary text-[17px] maw-w-3xl leading-[30px]'>
        Soy un desarrollador web full stack con sede en la Ciudad de Coquimbo, Chile. <br />
        Tengo experiencia en el desarrollo de aplicaciones web, mobile y blockchain. <br />
        Mi objetivo es siempre construir productos que proporcionen experiencias agradables e intuitivas junto con soluciones efectivas. <br />
        Me encantaria crear cosas que se puedan visualizar en la web en un periodo corto de tiempo, que sea util para el cliente y en lo posible relacionado con la web3.
      </div>


      <div
        className='mt-20 flex flex-wrap gap-10 justify-content'
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}


      </div>

    </>
  )
}

export default sectionWraper(About, "about")