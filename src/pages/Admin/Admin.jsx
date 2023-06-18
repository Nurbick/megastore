import React, {useState} from 'react';
import AdminProducts from "./AdminProducts/AdminProducts";
import AdminApplications from "./AdminApplications/AdminApplications";

const Admin = () => {

    const [products, setProducts] = useState(false);
    const [users, setUsers] = useState(false);
    const [applications, setApplications] = useState(false);

    return (
        <section className="admin">
            <div className="container">
                <h1 className="admin__title">
                    Инструменты администратора
                </h1>
                <div className="admin__content">
                    <div className="admin__left">
                        <ul className="admin__tools">
                            <li onClick={()=>{
                                setProducts(true);
                                setUsers(false);
                                setApplications(false);
                            }} className="admin__tool">
                                Настройка продуктов
                            </li>
                            <li onClick={()=>{
                                setProducts(false);
                                setUsers(true);
                                setApplications(false);
                                }} className="admin__tool">
                                Настройка пользователей
                            </li>
                            <li onClick={()=>{
                                setProducts(false);
                                setUsers(false);
                                setApplications(true);
                            }} className="admin__tool">
                                Заявки
                            </li>
                        </ul>
                    </div>
                    <div className="admin__right">
                        <AdminProducts products={products}/>
                        <AdminApplications applications={applications}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Admin;