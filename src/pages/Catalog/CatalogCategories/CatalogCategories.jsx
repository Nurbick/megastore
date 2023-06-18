import React from 'react';
import {useGetGroupsQuery} from "../../../redux/reducers/groups";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

const CatalogCategories = ({category, setCategory}) => {

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value)
    };

    const {data = [], isLoading} = useGetGroupsQuery();

    if (isLoading){
        return <h2>Loading...</h2>
    }

    return (
        <div className="catalog__categories">
            <InputLabel id="demo-simple-select-helper-label">Категории</InputLabel>
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={category}
                style={{color : "black", background: "#EEEEEE"}}
                label="Category"
                onChange={handleChange}

            >
                <MenuItem style={{color : "black"}} value={'all'}>Всё</MenuItem>
                {
                    data.map((item)=>(
                        <MenuItem style={{color : "black"}} value={item.value} className="catalog__category" key={item.id}>{item.name}</MenuItem>
                    ))
                }
            </Select>
        </div>
    );
};

export default CatalogCategories;