import React from 'react'
import { Link } from 'react-router-dom'
import Bigdrop from './Bigdrop'
import Cuker from './Cuker'
import Tommy from './Tommy'

export default function  Hrefs() {
  return (
    <div className='hrefs'>
        <ul className='ul'>
            <li className='list'>
                <Link className='link' to='/tommy' element={ <Tommy/> } >
                    TOMMY
                </Link>
            </li>
            <li className='list'>
                <Link className='link' to='/bigdrop' element={ <Bigdrop/> } >
                    BIGDROP
                </Link>
            </li>
            <li className='list'>
                <Link className='link' to='/cuker' element={<Cuker/>}>
                    CUKER
                </Link>
            </li>
        </ul>
    </div>
  )
}

