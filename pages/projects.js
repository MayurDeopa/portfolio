import IndividualProject from '../components/projects/IndividualProject'
import {TbBrandNextjs} from 'react-icons/tb'
import {DiMongodb} from 'react-icons/di'
import { useEffect, useState } from 'react'
import { ProjectsContainer } from '../components/projects/styles'
import Spinner from '../components/Spinner'
import { ProjectSkeleton } from '../components/styles'

const Projects =()=>{

    const [projects,setProjects] = useState([])
    const[isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        const getProjects  = async()=>{
           try{
            const data = await fetch('/api/projects',{method:'GET'})
            const res = await data.json()
            setProjects(res.data)
            setIsLoading(false)
           }catch(error){
            console.log(error)
           }
        }
        getProjects()
    },[])

    // const projects = [
    //     {
    //         id:1,
    //         title:"Portfolio",
    //         description:"A portfolio website built using Next.js and hosted on Versel ",
    //         image:'https://i.ibb.co/xHTJ7Vc/portfolio-desktop.png',
    //         github:'https://github.com/MayurDeopa',
    //         live:"https://portfolio-ten-eta-98.vercel.app",
    //         icons:[
    //             {
    //                 name:'Next.js',
    //                 icon:TbBrandNextjs
    //             },
    //             {
    //                 name:'MongoDB',
    //                 icon:DiMongodb
    //             }
    //         ]
    //     },
    //     {
    //         id:2,
    //         title:"Anti Matter",
    //         description:"An Ecommerce Store",
    //         image:'https://i.ibb.co/tKYKBBC/anti.png',
    //         github:'https://github.com/MayurDeopa',
    //         live:"https://antimatterclothing.vercel.app/",
    //         icons:[
    //             {
    //                 name:'Next.js',
    //                 icon:TbBrandNextjs
    //             }
    //         ]
    //     }
    // ]
    return(
            <div className="page">
                <h1>Projects</h1>
                {isLoading?(
                    <ProjectsContainer>
                        {Array(20).fill(0).map((p,index)=>{
                            return <ProjectSkeleton key={index}/>
                        })}
                    </ProjectsContainer>
                ):(
                    <ProjectsContainer>
                        {projects.map((p)=>{
                            return <IndividualProject key={p.id} details={p}/>
                        })}
                    </ProjectsContainer>
                )}
            </div>
    )
}

export default Projects;