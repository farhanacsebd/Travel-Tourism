import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Details.css';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../../../Hooks/useAuth';

const Details = () => {
    const [docDetails, setDocDetails] = useState([])
    const { Id } = useParams()
    const { user } = useAuth();
    // console.log(user);

    useEffect(() => {
        fetch(`https://immense-depths-46109.herokuapp.com/services/${Id}`)
            .then(res => res.json())
            .then(data => setDocDetails(data))
        // .then(data => setDocDetails(data.find(x => x.id === +Id)))
    }, [])


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://immense-depths-46109.herokuapp.com/users', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('Are you like to added this product?');
                    reset();
                }
            })

    }


    return (
        <Container className="py-5 my-5">
            <div className="row">

                <div className="col-md-5">
                    <img src={docDetails.img} alt="" className="w-100" />
                    <div><h3>DEPARTMENT:{docDetails?.name}</h3>
                        <p>Description:{docDetails?.description}</p>
                        <p>Price:{docDetails?.price}</p>
                        <button className="btn btn-primary">Buy Now</button></div>
                </div>

                <div className="col-md-7 text-start add-service">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input {...register("name", { required: true, maxLength: 120 })} defaultValue={user.displayName} />
                        <input {...register("email", { required: true, maxLength: 120 })} defaultValue={user.email} />
                        <textarea {...register("address")} placeholder="Address" />
                        <input type="number" {...register("contact-number")} placeholder="Contact-Number" />

                        <input type="submit" />
                    </form>
                </div>

            </div>
        </Container>
    );
};

export default Details;