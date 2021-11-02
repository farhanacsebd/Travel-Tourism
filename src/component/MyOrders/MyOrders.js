import React, { useEffect, useState } from 'react';

const MyOrders = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://immense-depths-46109.herokuapp.com/users')
            .then(res => res.json())
            .then(data => {
                const value = data.filter(db => db.email === 'farhana.cse.bd@gmail.com')
                setUsers(value);
            });


    }, [])


    const handleDelete = id => {

        const proceed = window.confirm('Are you sure,You waht to delete?')
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
        <div id="users">
            <h2 className="mt-5 text-info">My orders</h2>
            <div className="row">
                {
                    users.map(user => <div className="col-md-4">
                        <div className="p-3 m-2 shadow-lg rounded border border-success" style={{ width: "21rem", backgroundColor: "lightcyan" }}>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                            <p>{user.address}</p>
                            <button className="btn btn-danger" onClick={() => handleDelete(user._id)}>Delete</button>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default MyOrders;
