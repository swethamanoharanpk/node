import React from 'react'
import { useDispatch } from 'react-redux'
import { removeDatas } from '../Redux/Userslice'

function Home() {
    const dispatch = useDispatch()

    function remove(){
        dispatch(removeDatas())

    }
  return (
    <div>
    <h1>welcome to home page</h1>
    <button onClick={remove}>Button</button>
    </div>
  )
}

export default Home