const setUser = (data: any)=>{
    return{
        type:"SET_USER",
        payload: data
    }
}

export default {setUser};