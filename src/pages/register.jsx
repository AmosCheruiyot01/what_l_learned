import './register.css'

import React from 'react'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

function Register() {


  const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        'Password must contain at least one uppercase letter, one lowercase letter, and one numeric digit'
      ),
    confirmPassword: yup
      .string()
      .required('Confirm Password is required')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.log(data)
  }


  return (
<div className="register_page">
  <p>please register here if you are new;</p>
  <form action="" className='form' onSubmit={handleSubmit(onSubmit)}> 

    <>
    <input type="text" placeholder='username' {...register("username")}/>
    </>

    <>
    <input type="password" placeholder='password' {...register("password")} />
    </>

    <>
    <input type="password" placeholder='confirm password' {...register("confirm_password")} />
    </>

    <input type="submit" className='btn' />

  </form>

  <Link to='/' className='link'> Return to login? </Link>

  
</div>

  )
}

export default Register