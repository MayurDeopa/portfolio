export const postData=async(data)=>{
    try{
        const get = await fetch('http://localhost:3000/api/users',{
        method :"POST",
        headers:{"Content-Type" :"application/json"},
        body:JSON.stringify(data)
    })
    return await get.json()
    }

    catch(err){
        return  err
    }
}

