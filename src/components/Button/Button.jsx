import React from 'react';
import {AiOutlineRight} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'



const Button = ({name, onClick, type}) => {

    const navigate = useNavigate();

    return (
        <button className="button" type={type} onClick={onClick}>
            {name} <AiOutlineRight/>
        </button>
    );
};

export default Button;