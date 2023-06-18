import React, {useContext} from 'react';
import TextField from "@mui/material/TextField";
import {useForm} from "react-hook-form";
import {useAddApplicationMutation} from "../../redux/reducers/application";
import InputMask from "react-input-mask";
import {CustomContext} from "../../utils/Context";

const Overlay = () => {

    const {overlay, setOverlay} = useContext(CustomContext);


    const {
        register,
        reset,
        handleSubmit,
        formState : {
            errors
        }
    } = useForm({mode:"onBlur"});

    const [addApplication] = useAddApplicationMutation();

    const registerApplication = async (data) =>{
        await addApplication(data);
        reset();
        setOverlay(false)
    };

    const exitOverlay = (e)=>{
        if (e.target.classList.contains(`overlay`) || e.target.classList.contains('overlay__close')){
            setOverlay(false)
        }
    };

    return (
        <div onClick={exitOverlay} style={{display:`${overlay ? 'flex' : 'none'}`}} className="overlay">
            <div className="overlay__block">
                <span onClick={exitOverlay} className="overlay__close">
                    X
                </span>
                <form onSubmit={handleSubmit(registerApplication)} action="" className="overlay__form">
                    <h2 className="overlay__title">
                        ОСТАВИТЬ ЗАЯВКУ
                    </h2>
                    <label htmlFor="" className="overlay__label">
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
                            type="text" placeholder="Имя" className="overlay__input"
                        />

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
                            type="email" placeholder="Email" className="overlay__input"
                        />
                    </label>
                    <button type="submit" className="overlay__button">
                        Оставить заявку
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Overlay;