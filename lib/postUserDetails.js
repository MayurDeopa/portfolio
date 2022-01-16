export const postData=async(data)=>{
    if(!data.name|| !data.email || !data.message){
        return {success:false, message:"Input fields cannot be empty"}
    }
    else{
        try{
            const get = await fetch('https://portfolio-ten-eta-98.vercel.app/api/users',{
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
    
}

