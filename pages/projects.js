import IndividualProject from '../components/IndividualProject'
import {TbBrandNextjs} from 'react-icons/tb'
import {DiMongodb,DiCom} from 'react-icons/di'

const Projects =()=>{
    const projects = [
        {
            id:1,
            title:"Portfolio",
            description:"A portfolio website built using Next.js and hosted on Versel ",
            image:'https://i.ibb.co/xHTJ7Vc/portfolio-desktop.png',
            github:'https://github.com/MayurDeopa',
            live:"https://portfolio-ten-eta-98.vercel.app",
            icons:[
                {
                    name:'Next.js',
                    icon:TbBrandNextjs
                },
                {
                    name:'MongoDB',
                    icon:DiMongodb
                }
            ]
        },
        {
            id:2,
            title:"Anti Matter",
            description:"An Ecommerce Store",
            image:'https://i.ibb.co/tKYKBBC/anti.png',
            github:'https://github.com/MayurDeopa',
            live:"https://antimatterclothing.vercel.app/",
            icons:[
                {
                    name:'Next.js',
                    icon:TbBrandNextjs
                }
            ]
        }
    ]
    return(
            <div className="page">
                <h1>Projects</h1>
                {projects.map((p)=>{
                    return <IndividualProject key={p.id} details={p}/>
                })}
            </div>
    )
}

export default Projects;