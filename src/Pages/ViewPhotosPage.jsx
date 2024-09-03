import React, { useEffect, useState } from 'react'

const ViewPhotosPage = () => {

    const [photos, setPhotos] = useState([])
    const [error, setError] = useState(null)

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
            if(!response.ok){
                throw new Error('Network response was not ok')
            }
            return response.json();
        }).then(data => {
            setPhotos(data);
        }).catch(error => {
            setError(error.message);
        });
    },[]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
    <div className="w-full max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">View Photos Page</h1>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <ul className="space-y-6">
            {photos.map(photo => (
                <li key={photo.id} className="border border-gray-300 p-4 rounded-lg shadow-md bg-gray-50">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2"><strong>Title: </strong>{photo.title}</h3>
                    <img src={photo.url} alt={photo.title} className="w-full max-w-xs h-auto rounded-lg shadow-md mb-2 mx-auto" />
                    <p className="text-gray-600">
                        Thumbnail URL: <a href={photo.thumbnailUrl} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">{photo.thumbnailUrl}</a>
                    </p>
                </li>
            ))}
        </ul>
    </div>
</div>

    )
}

export default ViewPhotosPage
