import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDatafromDatabases} from '../Api'


function Profile() {
    //const dispatch = useDispatch()
    const [data,setData] = useState("");
    const loginId = useSelector((logdetails)=>logdetails.loginInfo.login)
    console.log("deatils of loginperson",loginId)
    if(loginId){
        var id = loginId.userid
    }
    console.log(id);

    useEffect(()=>{
        getDatafromDatabases(id).then((result)=>{console.log("00000",result)
        setData(result)})
        
    },[])
    

  return (
    <div style={{textAlign:"center"}}>
    <h2>profile page</h2>
    <h4>username:{data.username}</h4>
    <h4>email:{data.email}</h4>
    <h4>place:{data.place}</h4>
    <h4>job:{data.job}</h4>
    <h4>mobile:{data.mobile}</h4>
    
    </div>
  )
}


export default Profile