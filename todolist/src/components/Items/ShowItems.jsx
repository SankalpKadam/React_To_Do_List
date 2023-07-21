import React, { useState } from "react";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
function ShowItems(){
    const controls={
        margin:"0 0 0 .5rem",
        color:"#ffffff"
    }
    const [clicked,setClicked]=useState(false)
    return(
        <div className="showItems">
            {
                clicked
                ?
                <CheckCircleIcon  style={{
                    width:(window.screen.width <= 600)?"20%":"10%",
                    color:"#ffffff"
                }}
                onClick={()=>{
                        setClicked(false)
                    }}
                />
                :
                <Fab style={{
                    transform:"scale(.4)",
                    width:(window.screen.width <= 600)?"20%":"10%",
                    backgroundColor:"#ffffff"
                    }} onClick={()=>{
                        setClicked(true)
                    }}>
                </Fab>
            }
            <p>
                ToDo Items
            </p>
            <div className="itemControls">
                <Zoom in={true} style={controls}>
                    <EditRoundedIcon />
                </Zoom>
                <Zoom in={true} style={controls}>

                    <DeleteIcon />
                </Zoom>
            </div>
        </div>

    );
}

export default ShowItems;