

export const getProject = async()=>{
    const data = await fetch('https://api.github.com/users/MayurDeopa/repos',{
        method:'GET'
    })
    return await data.json()
}