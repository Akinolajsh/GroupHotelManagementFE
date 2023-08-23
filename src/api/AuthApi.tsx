import axios from "axios"


const url:string = "https://grouphotelbe.onrender.com"



export const registerUser = async(data: any)=>{
    try {
      const config = {
        "content-type": "multipart/formdata"
      }
        return await axios.post(`${url}/createUser`, config,data).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const signInUser = async(data: any)=>{
    try {
        return await axios.post(`${url}/signInUser`, data).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const ViewUsers = async()=>{
    try {
        return axios.get(`${url}/readAll`).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
       console.log(error) 
    }
}

export const viewOneUser = (id: any)=>{
    try {
      return axios.get(`${url}/${id}/readOneUser`).then((res:any)=>{
        return res.data.data
      })  
    } catch (error) {
        console.log(error)
    }
}