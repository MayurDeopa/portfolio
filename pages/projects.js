import Project from "../components/Project";


const Projects =()=>{
    const projects = [
        {
            title:"mi-store",
            description:"An E-Commerce Web-App built using React.js ,Node.js, Express,js and MongoDB ",
            image:'/mi-store/mi-store-desktop.png'
        },
        {
            title:"Portfolio",
            description:"A portfolio website built using Next.js and hosted on Versel ",
            image:'/portfolio/portfolio-desktop.png'
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