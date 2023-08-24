import axios from "axios";

const url: string = "https://grouphotelbe.onrender.com/api/v1";

export const createRoom = async (data: any, adminID: string) => {
  try {
    const config: any = {
      "content-type": "multipart/form-data",
    };
    return await axios
      .post(`${url}/${adminID}/createRoom`, config, data)
      .then((res: any) => {
        
         console.log("first",res.data.data)
      });
  } catch (error) {
    console.log(error);
  }
};


export const viewOneRoom = async (roomID: any) => {
  try {
    return await axios
      .get(`${url}/${roomID}/view`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const viewRoom = async () => {
  try {
    return await axios
      .get(`${url}/viewRooms`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

