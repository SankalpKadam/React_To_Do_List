import React from "react";
import ListAltIcon from '@mui/icons-material/ListAlt';
import AddNewItem from "./Items/AddNewItem";
import ShowItems from "./Items/ShowItems";

function ToDoList(params) {
    return(
        <div className="entireList">
            <h2>To-Do List <ListAltIcon /></h2>
            <AddNewItem/>
            <ShowItems />
        </div>
    
    );
}

export default ToDoList;