import React from 'react'
import './User.css'

const User = ({id,title,completed,onDelete}) => {
    
    
    const handleDelete = () => {
        onDelete(id);
    }
    return (
        <div className='list'>
            <span>{id}</span>
            <span>{title}</span>
            <span>{completed}</span>
            <span><button onClick={handleDelete}>Delete</button></span>
        </div>
    )
}

export default User
