import React from 'react';
import {Link} from "react-router-dom";
import {useAddUserMutation} from "../../redux/reducers/users";
import {useForm} from "react-hook-form";
import TextField from "@mui/material/TextField";
import InputMask from 'react-input-mask';
import {useNavigate} from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();
    const {
        register,
        reset,
        handleSubmit,
        formState : {
            errors
        }
    } = useForm({mode:"onBlur"});

    const [addUser] = useAddUserMutation();

    const registerUser = async (data) =>{
        await addUser(data);
        reset();
        navigate('/login')

    };


    return (
        <div className="register">
            <form noValidate onSubmit={handleSubmit(registerUser)} className="register__form">
                <h1 className="register__form-title">Регистрация</h1>
                <label htmlFor="" className="register__form-label">
                    <div className="register__form-left">
                        <TextField
                            {...register('name',{
                                required:{
                                    message:"Обязательно заполнить",
                                    value:true
                                },
                                maxLength: {
                                    message: 'До 20 символов',
                                    value: 20,
                                },
                                minLength: {
                                    message: 'Минимум 3 символа',
                                    value: 3,
                                },
                            })}
                            error={!!errors.name}
                            label={errors.name && `Ошибка`}
                            helperText={errors.name && `${errors.name.message}`}
                            type="text" placeholder="Имя" className="register__form-input"
                        />
                        <TextField
                            {...register('surname',{
                                required:{
                                    message:"Обязательно заполнить",
                                    value:true
                                },
                                maxLength: {
                                    message: 'До 20 символов',
                                    value: 20,
                                },
                                minLength: {
                                    message: 'Минимум 3 символа',
                                    value: 3,
                                },
                            })}
                            error={!!errors.surname}
                            label={errors.surname && `Ошибка`}
                            helperText={errors.surname && `${errors.surname.message}`}
                            type="text" placeholder="Фамилия" className="register__form-input"
                        />
                        <TextField
                            {...register('login',{
                                required:{
                                    message:"Обязательно заполнить",
                                    value:true
                                },
                                maxLength: {
                                    message: 'До 20 символов',
                                    value: 20,
                                },
                                minLength: {
                                    message: 'Минимум 3 символа',
                                    value: 3,
                                },
                            })}
                            error={!!errors.login}
                            label={errors.login && `Ошибка`}
                            helperText={errors.login && `${errors.login.message}`}
                            type="text" placeholder="Логин" className="register__form-input"
                        />
                    </div>
                    <div className="register__form-right">
                        <InputMask
                            {...register('phone', {
                            required: {
                                value: true,
                                message: 'Это поле обязательное',
                            },
                            pattern: {
                                value: /^\+996\(\d{3}\)\d{2}-\d{2}-\d{2}$/,
                                message: 'Заполните номер телефона',
                            },
                        })}
                            mask={`+\\9\\96(999)99-99-99`}
                            type='tel'
                            className='register__form-input'
                            placeholder="Номер телефона"
                        />
                        <TextField
                            {...register('email',{
                                required:{
                                    message:"Обязательно заполнить",
                                    value:true
                                }
                            })}
                            error={!!errors.email}
                            label={errors.email && `Ошибка`}
                            helperText={errors.email && `${errors.email.message}`}
                            type="email" placeholder="Email" className="register__form-input"
                        />
                        <TextField
                            {...register('password', {
                                required: {
                                    message: 'Придумайте пароль',
                                    value: true,
                                },
                                maxLength: {
                                    message: 'До 20 символов',
                                    value: 20,
                                },
                                minLength: {
                                    message: 'Минимум 8 символов',
                                    value: 8,
                                },
                                pattern: {
                                    message: 'Напишите пароль правильно',
                                    value: /(?=.*[0-9])(?=.*[a-z]){6,}/g,
                                },
                            })}
                            error={!!errors.password}
                            label={errors.password && `Ошибка`}
                            helperText={errors.password && `${errors.password.message}`}
                            type="password" placeholder="Пароль"  className="register__form-input"
                        />
                    </div>
                </label>
                <button type="submit" className="register__form-btn">Зарегестрироваться</button>
                <Link className="register__form-link" to="/login">Уже есть аккаунт</Link>
            </form>
        </div>
    );
};

export default Register;