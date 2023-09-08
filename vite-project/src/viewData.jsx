import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Lista=()=>{
    const [lista, setLista] = useState([{
        id:0,
        username:'',
        password:'',
        email:''
    }]);

    useEffect(()=>{
        axios.get('http://localhost:3000/api/users')
        .then((resp)=>{
            const datos = resp.data.users;
            setLista(datos);
            console.log(lista);
        })
        .catch((error)=>{
            alert('Error obtendiendo los datos! Anda paya Bobo!!');
            console.log(error);
        })
    },[]);

    return (
        <>
            <h1>Lista de usuarios</h1>
            <ul>
                {lista.map((usuario)=>{
                    <li>{usuario.username}</li>
                })}
            </ul>
        </>

    )
}