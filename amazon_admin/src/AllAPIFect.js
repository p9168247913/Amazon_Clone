import axios from "axios"

//getting data from api

export const getDataAPI = (key) =>{
    return axios.get(`https://atmazon.onrender.com/${key}`).then(res=>{
        return res.data
    }).catch(err=>{
        console.log(err);
    })
}

//add data to api
export const postDataAPI = (key, data) =>{
    console.log(data);
    return axios.post(`https://atmazon.onrender.com/${key}`, data).then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    })
}

//delete data from api
// export const deleteAPI = (key, id) =>{
//     return axios.delete(`https://atmazon.onrender.com/${key}/${id}`)
// }

export const editAPI = (key, _id, payload) =>{
    console.log("Data",key, _id, payload)
    return axios.patch(`https://atmazon.onrender.com/${key}/${_id}`, payload).then(res=>{
        console.log(res)
    }).catch(e=>{
        console.log(e)
    })
}