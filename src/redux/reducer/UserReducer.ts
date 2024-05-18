const userManipularion = (state = {}, action:any)=>{
    switch (action.type) {
        case "SET_USER": 
            return{
                ...state,
                name:action.payload
                
            }
        
    
        default:
            return state;
    }
}
export default userManipularion;
