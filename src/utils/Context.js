import React, {createContext, useEffect, useState} from "react";

export const CustomContext = createContext();

export const Context = (props) => {

    const [basket, setBasket] = useState([]);
    const [show, setShow] = useState(false);
    const [overlay, setOverlay] = useState(false);



    const addBasket = (product) => {
        setBasket(prev => [...prev, {
            ...product,
            count:1
        }]);
    };
    const plusOneBasket = (id) => {
        setBasket(prev => prev.map((item)=>{
            if (item.id === id){
                return {...item, count : item.count + 1}
            }
            return item
        }));
    };
    const minusOneBasket = (id) => {
        let count = basket.find(item => item.id === id).count;

        if (count===1){
            setBasket(prev=>prev.filter(item=>item.id !== id))
        }else{
            setBasket(prev => prev.map((item)=>{
                if (item.id === id){
                    return {...item, count : item.count - 1}
                }
                return item
            }))
        }
    };

    const delBasket = (id) =>{
        setBasket(prev=>prev.filter(item=>item.id !== id));
    };

    useEffect(()=>{
        if(localStorage.getItem('basket') !== null ){
            setBasket(JSON.parse(localStorage.getItem('basket')))
        }
    }, []);
    useEffect(()=>{
        localStorage.setItem('basket', JSON.stringify(basket))
    }, [basket]);


    const value = {
        basket,
        setBasket,
        addBasket,
        show,
        setOverlay,
        setShow,
        overlay,
        plusOneBasket,
        minusOneBasket,
        delBasket
    };

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>

};