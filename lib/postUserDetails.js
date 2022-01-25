const postData=async(data)=>{
    if(!data.name|| !data.email || !data.message){
        return {success:false, message:"Input fields cannot be empty"}
    }
    else{
        try{
            const get = await fetch("http://localhost:3000/api/users",{
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

module.exports = {postData}

