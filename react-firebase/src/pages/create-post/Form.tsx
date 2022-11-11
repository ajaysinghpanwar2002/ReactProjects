import React from 'react'
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";

function Form() {
    const schema = yup.object().shape({
        title: yup.string().required("you must add a title"),
        desciption: yup.string().required("you must add a title"),
    });
    const {register, handleSubmit} = useForm({
        resolver:yupResolver(schema),
    });
    const onCreatePost = (data:any) =>{
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onCreatePost)}>
            <input placeholder='Title' {...register("title")} />
            <textarea placeholder='Description' {...register("description")} />
            <input type="submit" />
        </form>
    )
}

export default Form