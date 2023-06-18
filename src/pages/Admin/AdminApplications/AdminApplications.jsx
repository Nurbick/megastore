import React from 'react';
import Avatar from '@mui/material/Avatar';
import {useGetApplicationsQuery} from "../../../redux/reducers/application";

const AdminApplications = ({applications}) => {

    const {data=[], isLoading} = useGetApplicationsQuery();

    if (isLoading){
       return <h2>...Loading</h2>
    }


    return (
        <div style={{display: {display: `${applications ? "flex" : "none"}`}}} className="adminApplications">
            <ul className="adminApplications__applications">
                {
                    data.map((item)=>(
                        <li className="adminApplications__application">
                            <div className="adminApplications__application-left">
                                <Avatar sx={{width:70, height:70, bgcolor: '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase() }}>{item.name[0]}</Avatar>
                                <h3 className="adminApplications__name">{item.name}</h3>
                                <a href={`tel:${item.phone}`} className="adminApplications__number">Телефон: {item.phone}</a>
                                <a href={`email:${item.email}`} className="adminApplications__email">Email: {item.email}</a>
                            </div>
                            <div className="adminApplications__application-right">
                                <div className="adminApplications__buttons">
                                    {item.phone? <button type="button" className="adminApplications__button">Позвонить</button> : ''}
                                    {item.email? <button type="button" className="adminApplications__button">Написать</button> : ''}
                                </div>
                            </div>

                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default AdminApplications;