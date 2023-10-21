import React from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { apiDomain } from '../utils/utils';
import Axios from 'axios';

function Login() {

  const Navigate = useNavigate();
  // Define the schema for yup validation
  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one numeric digit'
    )  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

//   const onSubmit = async(data) => {
//     console.log(data)
//     await Axios.post(`${apiDomain}/login`, data)
//     .then(({data}) => {
//         if(data.token) {
//           console.log(data.token)
//             // dispatch({type: 'LOGIN_SUCCESS', payload: data})
//             alert('login successful')
//             Navigate('/dashboard')
//         }
//     })
//     .catch(err => {
//         alert('login failed!, error: ' + err.message)
//     }
//         )
// }

const onSubmit = async(data) => {
  console.log(data)
  await Axios.post(`${apiDomain}/login`, data)
  .then(({data}) => {
      if(data.token) {
          // dispatch({type: 'LOGIN_SUCCESS', payload: data})
          alert('login successful')
          Navigate('/dashboard')
      }
  })
  .catch(error => {
    alert(error.response.data.error);
  }
      )
}

  return (
    
      <div className='login'>
        <h4>Login</h4>
        <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
          <>
            <input type="text" placeholder='Username' {...register('username')} />
          </>
          <>
            <input type="password" placeholder='Password' {...register('password')} />
          </>

          {/* Display validation errors */}
          {errors.username && <span className="error">{errors.username.message}</span>}
          {errors.password && <span className="error">{errors.password.message}</span>}

          <button type="submit">Submit</button>
        </form>
        <Link to="/Register" className='register'>Register?</Link>
      </div>
    
  );
}

export default Login;
