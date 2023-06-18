import React, {Suspense} from 'react';
import './styles/style.scss'
import {useSelector} from "react-redux";
import AuthRouting from "./routing/AuthRouting";
import PrivateRouting from "./routing/PrivateRouting";

const App = () => {

    const {user} = useSelector((store)=>store.persistedReducer.user.user);

    return (
        <Suspense fallback={'...Loading'}>
            {user===undefined ? <AuthRouting /> : <PrivateRouting />}

        </Suspense>
    );
};

export default App;