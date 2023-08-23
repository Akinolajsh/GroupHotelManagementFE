import axios from "axios"


const url:string = "http://localhost3000/api/v1"

export const registerAdmin = async(data: any)=>{
    try {
      const config = {
        "content-type": "multipart/formdata"
      }
        return await axios.post(`${url}/admin-sign-up`, config, data).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const signInAdmin = async(data: any)=>{
    try {
        return await axios.post(`${url}/admin-sign-in`, data).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const ViewAdmins = async()=>{
    try {
        return axios.get(`${url}/view-admins`).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
       console.log(error) 
    }
}

export const viewOneAdmin = (adminID: any)=>{
    try {
      return axios.get(`${url}/${adminID}/view-one-admin`).then((res:any)=>{
        return res.data.data
      })  
    } catch (error) {
        console.log(error)
    }
}