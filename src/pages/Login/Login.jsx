import React from 'react';
import TextField from "@mui/material/TextField";
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { useToast } from '@chakra-ui/react'
import {useDispatch} from "react-redux";
import { fillUser } from '../../redux/reducers/user'

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toast = useToast();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onBlur' });

    const loginUser = data => {
        axios
            .post('http://localhost:8080/login', data)
            .then(({ data }) => {
                dispatch(fillUser(data));
                navigate('/');
            })
            .catch(err =>
                toast({
                    title: 'Такого аккаунта не существует.',
                    status: 'error',
                    duration: 5000,
                    position: 'center-top',
                    isClosable: true,
                })
            )
    };
    return (
        <div className="register">
            <form onSubmit={handleSubmit(loginUser)} noValidate className="register__form">
                <h1 className="register__form-title">
                    Вход
                </h1>
                <label className="register__form-label login__label">
                    <TextField
                        {...register('email', {
                            required: {
                                message: 'Напишите логин',
                                value: true,
                            }
                        })}
                        error={!!errors.email}
                        label={errors.email && `Ошибка`}
                        helperText={errors.email && `${errors.email.message}`}
                        placeholder="Email"
                        type="email"
                    />
                    <TextField
                        {...register('password', {
                            required: {
                                message: 'Напишите пароль',
                                value: true,
                            }
                        })}
                        error={!!errors.password}
                        label={errors.password && `Ошибка`}
                        helperText={errors.password && `${errors.password.message}`}
                        placeholder="Пароль"
                        type="password"
                    />
                </label>
                <button type="submit" className="register__form-btn">Войти</button>
                <Link className="register__form-link" to="/register">Ещё нет аккаунта</Link>
            </form>
        </div>
    );
};

export default Login;