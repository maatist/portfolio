import React from 'react'
import { motion } from 'framer-motion'

import { fadeIn } from '../utils/motion'
import { styles } from '../styles'
import { skills } from '../constants'
import { sectionWraper } from '../hoc'

const Skills = () => {
    return (
        <div
            className='flex flex-col justify-center relative z-10 align-middle'
        >
            <div
                className='relative flex justify-between align-middle flex-col w-full max-w-[1100px] gap-12'
            >
                <h2
                    className={styles.sectionHeadText}
                >
                    Skills.
                </h2>
                <p
                    className="text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Estas son las tecnologias con las que he trabajado los ultimos años.
                </p>



                <div
                    className='w-full h-full grid grid-cols-1 md:grid-cols-2 mt-[30px] gap-[30px]'
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn("right", "spring", 0.25 * index, 0.75)}
                        >
                            <div
                                className='w-full h-full min-w-[330px] max-w-[500px] border-solid border-skillBorder border-[0.1px] shadow-lg shadow-skillBoxShadow rounded-lg m-2 px-3 xs:px-[40px] py-[16px]'

                            >
                                <h2
                                    className='text-[28px] font-semibold text-secondary text-center mb-6'
                                >
                                    {skill.title}
                                </h2>
                                <div
                                    className='flex justify-center flex-wrap gap-[12px] mt-[20px]'
                                >
                                    {skill.skills.map((item, index) => (
                                        <div
                                            className='text-[16px] font-normal text-secondary border-solid border-[1px] rounded-2xl px-[12px] py-[16px] flex align-middle items-center justify-center gap-2 bg-secondary/5'
                                            key={index}
                                        >
                                            <img
                                                className='w-[34px] h-[34px]'
                                                alt={item.name}
                                                src={item.image}
                                            />
                                            {item.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </div>
    )
}
export default sectionWraper(Skills, "")