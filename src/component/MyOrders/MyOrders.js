import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth()
    console.log(user);
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://immense-depths-46109.herokuapp.com/users')
            .then(res => res.json())
            .then(data => {
                const value = data.filter(db => db.email === user.email)
                setUsers(value);
            });


    }, [])


    const handleDelete = id => {

        const proceed = window.confirm('Are you sure,You want to delete?')
        if (proceed) {
            const url = `https://immense-depths-46109.herokuapp.com/users/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingUsers = users.filter(user => user._id !== id);
                        setUsers(remainingUsers)

                    }
                })
        }


    }
    return (
        <div className="container mb-5" id="users">
            <h2 className="mt-5 p-4 fw-bold">My Orders</h2>
            <div className="row g-5">
                {
                    users.map(user => <div className="col-md-4">
                        <div className="p-3 m-2 shadow-lg rounded border-success" style={{ width: "21rem" }}>
                            <p className="fw-bold" >Event Name : {user.address}</p>
                            <p><small>{user.name}</small></p>
                            <p><small>{user.email}</small></p>
                            <p className="fw-bold">Date : {user.date}</p>
                            <button className="btn btn-danger fw-bold text-dark me-2" onClick={() => handleDelete(user._id)}>Cancel</button>
                            <button className="btn btn-warning fw-bold text-dark">{user.status}</button>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default MyOrders;
