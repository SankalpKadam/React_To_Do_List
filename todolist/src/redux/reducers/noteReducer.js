function reducer(state=[], action) {
    if(action.type=="add"){
        return state.push(action.payload);
    }
    else if(action.type=="delete"){
        return state.pop(action.payload);
    }
    else{
        return state;
    }
}

export default reducer;