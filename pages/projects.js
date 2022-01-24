import Project from "../components/Project";
import {DiReact,DiNodejsSmall,DiMongodb} from 'react-icons/di'


const Projects =()=>{
    const projects = [
        {
            title:"mi-store",
            description:"An E-Commerce Web-App built using React.js ,Node.js, Express,js and MongoDB ",
            image:'/mi-store-desktop.png',
            tech:[<DiReact/>,<DiNodejsSmall/>,<DiMongodb/>],
            github:'https://github.com/MayurDeopa',
            live:'https://blissful-dijkstra-1ee60d.netlify.app'
        },
        {
            title:"Portfolio",
            description:"A portfolio website built using Next.js and hosted on Versel ",
            image:'/portfolio-desktop.png',
            tech:[<DiReact/>,<DiNodejsSmall/>,<DiMongodb/>],
            github:'https://github.com/MayurDeopa',
            live:"https://portfolio-ten-eta-98.vercel.app/"
        }
    ]
    return(
            <div className="page">
                <h1>Projects</h1>
                {projects.map((project,index)=>{
                    return <Project key={index} details={project}/>
                })}
            </div>
    )
}

export default Projects;