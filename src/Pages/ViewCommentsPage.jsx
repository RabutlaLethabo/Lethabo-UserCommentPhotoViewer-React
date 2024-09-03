import React, { useEffect, useState } from 'react';

const ViewCommentsPage = () => {
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not okay');
            }
            return response.json();
        })
        .then(data => {
            setComments(data);
        })
        .catch(error => {
            setError(error.message);
        });
    }, []);

    return (
        <div>
            <div>
                <h1 className="text-3xl text-gray-800 mb-6 text-center">View Comments Page</h1>
                {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
                <ul className="space-y-4">
                {comments.map(comment => (
                    <li key={comment.id} className="p-4 rounded-lg shadow-md bg-gray-50">
                    <h2 className="text-xl font-bold text-gray-800 mb-2 text-center"><strong>Comment Name: </strong>{comment.name}</h2>
                    <p className="text-gray-700 mb-2 text-center"><strong>Email: </strong> {comment.email}</p>
                    <p className="text-gray-700 text-center"><strong>Comment: </strong>{comment.body}</p>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );
};

export default ViewCommentsPage;
