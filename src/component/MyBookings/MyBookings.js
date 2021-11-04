import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const MyBookings = () => {
    const { user } = useAuth()
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

    // -------------------------------------------------------


    return (
        <div id="users" className="container mb-3">
            <h2 className="mt-5 p-2">Manage All Orders</h2>

            <div className="row">


                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user =>
                                <tr>

                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address}</td>
                                    <td>Pending...</td>
                                    <td> <Button className="btn btn-primary">✔</Button> <Button onClick={() => handleDelete(user._id)} className="btn btn-primary">No</Button> </td>
                                </tr>
                            )
                        }


                    </tbody>
                </Table>

            </div>

        </div>
    );
};

export default MyBookings;