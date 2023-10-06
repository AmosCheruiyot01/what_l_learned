import React,{useContext, useEffect} from 'react'
import './updateForm.css'
import { dashContext } from './dashboard'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'




function UpdateForm() {
    const {inputUpdates} = useContext(dashContext);

    const schema = yup.object().shape({
        header: yup.string().required(),
        body: yup.string().required(),
        category: yup.string().required(),
        date: yup.date().required(),
    })

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(schema)
    })

useEffect(() => {
    setValue("header", inputUpdates.header)
    setValue("body", inputUpdates.body)
    setValue("category", inputUpdates.category)
    setValue("date", inputUpdates.date)
}
, [inputUpdates])




    const onsubmit = (data) => {
        console.log(data)
    }
  return (
    <div className='update-form'>
        <form action="" onSubmit={handleSubmit(onsubmit)}>
            <input type="text" {...register("header")}/>
            <input className="update_body" {...register("body")}/>
                
            <div className="update_footer">
                <input className="update_category" {...register("category")}/>
                <input className="update_date" {...register("date")} />
            </div>

        </form>
    </div>
  )
}

export default UpdateForm