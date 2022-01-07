import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookNow = () => {
    const {id} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:3000/program/${id}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            <h1>gg {id}</h1>
            <h3>WOrikkk</h3>
        </div>
    );
}

export default BookNow;