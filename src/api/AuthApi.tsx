import axios from "axios"


const url:string = "http://localhost3000/api/v1"


export const registerUser = async(data: any)=>{
    try {
      const config = {
        "content-type": "multipart/formdata"
      }
        return await axios.post(`${url}/register-user`, config,data).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const signInUser = async(data: any)=>{
    try {
        return await axios.post(`${url}/sign-in`, data).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const ViewUsers = async()=>{
    try {
        return axios.get(`${url}/view-all`).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
       console.log(error) 
    }
}

export const viewOneUser = (userID: any)=>{
    try {
      return axios.get(`${url}/${userID}/view-one`).then((res:any)=>{
        return res.data.data
      })  
    } catch (error) {
        console.log(error)
    }
}