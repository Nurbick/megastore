import React from 'react';
import InputLabel from "@mui/material/InputLabel";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {useSortProductsQuery} from "../../../redux/reducers/products";

const CatalogObject = ({order, setOrder}) => {

    const {data = {}, isLoading} = useSortProductsQuery({order});

    const handleChange = (event: SelectChangeEvent) => {
        setOrder(event.target.value)
    };

    if (isLoading){
        return <h1>...Loading</h1>
    }

    return (
        <div className="catalog__categories">
            <InputLabel id="demo-simple-select-helper-label">Сортировка</InputLabel>
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={order}
                style={{color : "black", background: "#EEEEEE"}}
                label="Сортировка"
                onChange={handleChange}

            >
                <MenuItem style={{color : "black", background: "#EEEEEE"}} value={'default'} className="catalog__object-item">По умолчанию</MenuItem>
                <MenuItem style={{color : "black", background: "#EEEEEE"}} value={'desc'} className="catalog__object-item">По убыванию</MenuItem>
                <MenuItem style={{color : "black", background: "#EEEEEE"}} value={'asc'} className="catalog__object-item">По возрастанию</MenuItem>
                <MenuItem style={{color : "black", background: "#EEEEEE"}} value={'abc'} className="catalog__object-item">По алфавиту</MenuItem>
            </Select>

        </div>
    );
};

export default CatalogObject;