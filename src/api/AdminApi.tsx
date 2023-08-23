import axios from "axios"


const url:string = "https://grouphotelbe.onrender.com/api/v1"

export const registerAdmin = async(data: any)=>{
    try {
      const config = {
        "content-type": "multipart/formdata"
      }
        return await axios.post(`${url}/createAdmin`, config, data).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const signInAdmin = async(data: any)=>{
    try {
        return await axios.post(`${url}/signInAdmin`, data).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const ViewAdmins = async()=>{
    try {
        return axios.get(`${url}/viewAdmins`).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
       console.log(error) 
    }
}

export const viewOneAdmin = (adminID: any)=>{
    try {
      return axios.get(`${url}/${adminID}/viewOneAdmin`).then((res:any)=>{
        return res.data.data
      })  
    } catch (error) {
        console.log(error)
    }
}