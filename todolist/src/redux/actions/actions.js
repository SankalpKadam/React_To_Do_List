import React from "react"


function addNewNote(notes) {
    return (dispatch)=>{
            dispatch({
                type:"addNote",
                payload:notes
            })
    }
}


export default addNewNote;