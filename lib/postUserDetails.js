export  async function postData(data){
    try{
        const get = await fetch('https://portfolio-ten-eta-98.vercel.app//api/users',{
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

