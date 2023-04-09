

export const getApplianceData = async() => {
 
    try{
        let res = await fetch('https://amazon-x3fk.onrender.com/appliance')
        let data = await res.json()
        // console.log(data.Data)
        return data.Data
    }catch(e){
        console.log(e);
    }
  
}

export const getLaptopData = async() => {
 
    try{
        let res = await fetch('https://amazon-x3fk.onrender.com/laptop')
        let data = await res.json()
        // console.log(data.Data)
        return data.Data
    }catch(e){
        console.log(e);
    }
  
}

export const getWatchData = async() => {
 
    try{
        let res = await fetch('https://amazon-x3fk.onrender.com/watch')
        let data = await res.json()
        // console.log(data.Data)
        return data.Data
    }catch(e){
        console.log(e);
    }
  
}

export const getSoundbarData = async() => {
 
    try{
        let res = await fetch('https://amazon-x3fk.onrender.com/soundbar')
        let data = await res.json()
        // console.log(data.Data)
        return data.Data
    }catch(e){
        console.log(e);
    }
  
}

export const getTelevisionData = async() => {
 
    try{
        let res = await fetch('https://amazon-x3fk.onrender.com/telivision')
        let data = await res.json()
        // console.log(data.Data)
        return data.Data
    }catch(e){
        console.log(e);
    }
  
}