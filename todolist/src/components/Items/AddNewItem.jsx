import React from "react";
import Fab from '@mui/material/Fab';
import AddIcon from "@mui/icons-material/Add"
function AddNewItem(params) {
    return(
        <div className="newItem">
            <input placeholder="Add new ToDo..."/>
            <Fab style={{
                transform:"scale(0.7)",
                backgroundColor:"#fc964a",
                color:"#ffffff"
            }}>
                <AddIcon />
            </Fab>
        </div>

    );
}

export default AddNewItem;