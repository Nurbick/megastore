import React from 'react';
import {useGetGroupsQuery} from "../../redux/groups";

const Group = () => {

    const {data = [], isLoading} = useGetGroupsQuery();

    if (isLoading){
        return <h2>Loading...</h2>
    }

    return (
        <section className="group">
            <div className="container">
                <h2 className="group__title">Группы товаров</h2>
                <ul className="group__groups">
                    {
                        data.map((item)=>(
                            <li key={item.id} className="group__item">
                                <div className="group__item-img">
                                    <img src="" alt={item.name}/>
                                </div>
                                <h3 className="group__item-title">{item.name}</h3>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
};

export default Group;
