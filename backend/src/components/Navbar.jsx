import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeDatas } from '../Redux/Userslice'

function Navbar() {
    const dispatch = useDispatch()
    function deleteDatafromlocalstorage(){
        dispatch(removeDatas())

    }
  return (
    <div style={{width:"100%",height:"80px",backgroundColor:'yellow',display:"flex",alignItems:"center",justifyContent:"space-around",position:"fixed"}}>
    <h4>Home</h4>
    <h4><Link to={'/profilepage'}>Profile</Link></h4>
    <h4 onClick={deleteDatafromlocalstorage}>Logout</h4>

    </div>
  )
}

export default Navbar