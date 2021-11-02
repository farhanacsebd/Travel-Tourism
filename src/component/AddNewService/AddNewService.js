import React from 'react';
import './AddNewService.css';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://immense-depths-46109.herokuapp.com/services', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })

    }

    return (
        <div className="add-service m-5">
            <h2 className="pb-3">Please Add a Service</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 120 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image url" />
                <input className="bg-dark p-1 fw-bold text-white" type="submit" />
            </form>

        </div>
    );
};

export default AddNewService;