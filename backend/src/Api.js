import axios from "axios"
import { tokonstoring } from "./Redux/Userslice";

export const signupfunction = async(userinf)=>{
    try{
        console.log("secondcheck",userinf);
        
        const responseData = await axios.post("http://localhost:3000/user/postdata",userinf)
        console.log("api response in backend",responseData.data);
        return responseData.data.response
        

    }catch(err){}
}


export const loginfunction = async(logininf,dispatch)=>{
    try{
        const response = await axios.post("http://localhost:3000/authentication/login",logininf)
        console.log("final answer",response.data);
        dispatch(tokonstoring(response.data))
        return response.data.message
        
    }catch(err){
        console.log("error message",err.response.data)
        return err.response.data
    }

}

export const getDatafromDatabases = async(id)=>{
    try{
        const dataResponse = await axios.get(`http://localhost:3000/user/singledata/${id}`)
        console.log("finalanswer" , dataResponse.data)
        return dataResponse.data


    }catch(err){}

}

