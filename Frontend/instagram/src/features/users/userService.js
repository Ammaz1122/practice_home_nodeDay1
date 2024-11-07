// only api hit
//backend ko call karna yeh backend sa data lana
// functions call 

import axios  from "axios";

const base_url = 'http://localhost:3001/api/use';

export const registerUser = async(userData)=>{ 
    //user data means front end sa data lay ga, from forms kay through it sends it same as it is
    const response = await axios.post(`${base_url}/add-data`,userData)

    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }

    return response.data;
}