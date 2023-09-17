import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { sectionWraper } from '../hoc'
import { slideIn } from '../utils/motion'


const Contact = () => {

  const formRef = useRef()

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [loading, setloading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setloading(true)
    emailjs.send

    emailjs.send(
      "service_ls65kzu",
      "template_u7jzpa5",
      {
        from_name: form.name,
        to_name: "Matias",
        from_email: form.email,
        to_email: 'matias.seto@gmail.com',
        message: form.message
      },
      "ovvRyQo-trGJIWExW")
      .then(() => {
        setloading(false)
        alert("Mensaje enviado correctamente, te contactare a la brevedad")
        setForm({
          name: "",
          email: "",
          message: ""
        })
      }, (error) => {
        setloading(false)
        console.log(error)
        alert("Ocurrio un error al enviar el mensaje, intentalo nuevamente mas tarde")
      }
      )
  }


  return (
    <div
      className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p
          className={styles.sectionSubText}
        >
          Como ubicarme.
        </p>
        <h3
          className={styles.sectionHeadText}
        >
          Contacto.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label
            className='flex flex-col'
          >
            <span
              className='text-white font-medium mb-4'
            >Tu nombre
            </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Cual es tu nombre?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondaty text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label
            className='flex flex-col'
          >
            <span
              className='text-white font-medium mb-4'
            >Tu Email
            </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Cual es tu email?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondaty text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label
            className='flex flex-col'
          >
            <span
              className='text-white font-medium mb-4'
            >Tu mensaje
            </span>
            <textarea
              rows="7"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Que me quieres decir?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondaty text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>

        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default sectionWraper(Contact, "contact")