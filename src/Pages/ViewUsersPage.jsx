import React, { useEffect, useState } from 'react'

const ViewUsersPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setUsers(data);
        })
        .catch(error => {
            setError(error);
        });
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Users Page</h1>
            <ul className="space-y-6">
                {users.map(user => (
                <li key={user.id} className="text-center border border-gray-300 p-6 mb-4 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{user.name}</h2>
                    <p ><strong>Username:</strong> {user.username}</p>
                    <p className="text-gray-700 mb-1"><strong>Email:</strong> {user.email}</p>
                    <p className="text-gray-700 mb-1"><strong>Phone:</strong> {user.phone}</p>
                    <p className="text-gray-700 mb-2"><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{user.website}</a></p>
                    <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">Address:</h3>
                    <p className="text-gray-600">{user.address.street}, {user.address.suite}</p>
                    <p className="text-gray-600">{user.address.city}, {user.address.zipcode}</p>
                    <p className="text-gray-600"><strong>Latitude:</strong> {user.address.geo.lat}, <strong>Longitude:</strong> {user.address.geo.lng}</p>
                    </div>
                    <div>
                    <h3 className="text-lg font-semibold text-gray-700">Company:</h3>
                    <p className="text-gray-600"><strong>Name:</strong> {user.company.name}</p>
                    <p className="text-gray-600"><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
                    <p className="text-gray-600"><strong>BS:</strong> {user.company.bs}</p>
                    </div>
                </li>
                ))}
            </ul>
            </div>
        </div>
    )
}

export default ViewUsersPage
