import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {

  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)


  return (
    <nav
      //    todo: change bg color
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div
        className='w-full flex justify-between items-center max-w-7xl mx-auto'
      >
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className='text-white text-[18px] font-bold cursor-pointer'>Matias Sepulveda <span className='sm:block hidden'> &nbsp; | Desarrollador Web</span>
          </p>
          <h3 className="hidden">MATISETO</h3>
        </Link>
        <ul
          className='list-none hidden sm:flex flex-row gap-10'
        >
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-gray-300"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>






        <div
          className='sm:hidden flex flex-1 justify-end items-center'
        >
          <img
            src={toggle ? close : menu}
            alt="menu"
            className='w-[32px] h-[32px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />



          <div
            className={`${!toggle ? 'hidden' : 'flex'} justify-center w-full md:block absolute left-0 top-[76px] z-10 bg-primary pb-4 rounded-b-3xl`}
          >

            {/* <div
            className={`${!toggle ? 'hidden' : 'flex'} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-primary`}
          > */}
            <ul
              className='list-none flex justify-center items-center flex-col gap-4'
            >
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(link.title)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>

    </nav>
  )
}

export default Navbar