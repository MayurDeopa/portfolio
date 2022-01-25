import {DiReact,DiNodejsSmall,DiMongodb} from 'react-icons/di'
import IndividualProject from '../components/IndividualProject'


const Projects =()=>{
    const projects = [
        {
            id:1,
            title:"mi-store",
            description:"An E-Commerce Web-App built using React.js ,Node.js, Express,js and MongoDB ",
            image:'/mi-store-desktop.png',
            tech:[<DiReact/>,<DiNodejsSmall/>,<DiMongodb/>],
            github:'https://github.com/MayurDeopa',
            live:'https://blissful-dijkstra-1ee60d.netlify.app'
        },
        {
            id:2,
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
                {projects.map((p)=>{
                    return <IndividualProject key={p.id} details={p}/>
                })}
            </div>
    )
}

export default Projects;