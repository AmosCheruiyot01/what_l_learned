import './register.css'

import React from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { apiDomain } from '../../utils/utils';
import  Axios  from 'axios'

function Register() {

  const Navigate = useNavigate()  


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
    email: yup.string().email('Email must be a valid email').required('Email is required')
    
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data) => {
    console.log(data)
    await Axios
    .post(`${apiDomain}/register`, data)
    .then((response) => {
        console.log(response.data.message);
        alert(response.data.message);
        Navigate('/');
    })
    .catch((error) => {
        console.log(error.response.data.error);
        alert(error.response.data.error);
        alert(error.message);
    });  }


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
    <input type="email" placeholder='email' {...register("email")} />
    </>

    <input type="submit" className='btn' />

  </form>

  <Link to='/' className='link'> Return to login? </Link>

  
</div>

  )
}

export default Register