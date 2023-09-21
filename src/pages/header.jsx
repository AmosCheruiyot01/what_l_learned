import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'


function Header() {
    return (
        <div className='header'>
            <div className="header_top">
                <p>header top</p>
            </div>

            <div className="header_bottom">
                <p>header_bottom</p>
            </div>

        </div>
    )
}

export default Header