import {createSlice} from '@reduxjs/toolkit'
const userInformation= createSlice({
    name:"loginInfo",
    initialState:{
        login:null
    },
    reducers:{
        tokonstoring:(state,action)=>{
            console.log("55555555",action.payload)
            state.login = action.payload
        },
        removeDatas:(state,action)=>{
            state.login = null

        }

    }
})
export const {tokonstoring,removeDatas} = userInformation.actions
export default userInformation.reducer

 