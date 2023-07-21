import React from "react";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Zoom from '@mui/material/Zoom';
import DeleteIcon from '@mui/icons-material/Delete';
function ShowItems(){
    return(
        <div className="showItems">
            <p>
                ToDo Items
            </p>
            <div className="itemControls">
                {/* <Zoom> */}
                    <EditRoundedIcon />
                {/* </Zoom> */}
                {/* <Zoom> */}

                    <DeleteIcon />
                {/* </Zoom> */}
            </div>
        </div>

    );
}

export default ShowItems;