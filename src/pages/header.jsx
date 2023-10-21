import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { dashContext } from '../components/dashboard'
import { cats } from './categories'
import { apiDomain } from '../../../utils/utils'
import axios from 'axios'
// import axios from 'axios'
// import { apiDomain } from '../../../utils/utils'


function Header() {

    const { setAllPosts, allPosts, inputUpdates, setInputUpdates } = React.useContext(dashContext);

    const schema = yup.object().shape({
        learned: yup.string().required(),
        category: yup.string().required(),
        tittle: yup.string().required(),
        date: yup.string().required(),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

  

    const onSubmit = (data) => {
        console.log(data);
      axios.post(`${apiDomain}/learned`, data)
        .then((response) => {
          if (response.data) {
            // response.data.message && alert(response.data.message);
            console.log(response);
          } else {
            alert('Unexpected response data format');
          }
          setAllPosts([...allPosts, data]);
        })
        .catch((error) => {
          if (error.response && error.response.data && error.response.data.message) {
            alert(error.response.data.message);
          } else {
            alert('An error occurred while processing the request.');
          }
        });
    }


    // making updates
    // const updating = (e) => {

    //     console.log(inputUpdates)

    // }

    return (
        <div className='header'>
            <div className="header_top">
                <div className="dash_header">today i learned</div>
                <div className="dash_logout">
                    <button>
                        log out?
                    </button>
                </div>
            </div>

            <div className="header_bottom">
                <div className='first_row'>
                    <p>what did you learn today?</p>
                    <button>post/close</button>
                </div>

                <form action="" className='input_form' onSubmit={handleSubmit(onSubmit)} >
                    <input type="text" {...register("tittle")} placeholder='enter the tittle  here...' />
                    <input type="text" {...register("learned")} placeholder='enter what yoyu learned today here...' />
                    <select {...register("category")}>
                        <option value="">Choose category:</option>
                        {cats.map((value, index) => (
                            <option key={index} value={value}>{value}</option>
                        ))
                        }

                    </select>

                    <input type="text" {...register("date")} value={new Date()} style={{ display: "" }} />





                    <button type='submit' className='submit_button'>post</button>
                </form>

            </div>

        </div>
    )
}

export default Header