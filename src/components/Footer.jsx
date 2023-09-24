import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
    return (
        <footer>
            <div
                className='w-full text-secondary px-10'
            >
                <div
                    className='max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center'
                >
                    <div className='text-center' >
                        <div>
                            <FontAwesomeIcon icon={faCopyright} /> <strong> <span>MATISETO</span> </strong>
                            2023
                        </div>
                    </div>
                    <div>
                        <a href="#" className='w-10 h-10 rounded-full pt-1'>
                            <FontAwesomeIcon size='xl' icon={faLinkedin} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer