import Project from "../components/Project";
import miStore from '../public/mi-store-desktop.png'
import portfolio from '../public/portfolio-desktop.png'


const Projects =()=>{
    const projects = [
        {
            title:"mi-store",
            description:"An E-Commerce Web-App built using React.js ,Node.js, Express,js and MongoDB ",
            image:miStore
        },
        {
            title:"Portfolio",
            description:"A portfolio website built using Next.js and hosted on Versel ",
            image:portfolio
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