import IndividualProject from '../components/IndividualProject'


const Projects =()=>{
    const projects = [
        {
            id:1,
            title:"mi-store",
            description:"An E-Commerce Web-App built using React.js ,Node.js, Express,js and MongoDB ",
            image:'https://i.ibb.co/J2F9C9X/mi-store-desktop.png',
            github:'https://github.com/MayurDeopa',
            live:'https://blissful-dijkstra-1ee60d.netlify.app',
        },
        {
            id:2,
            title:"Portfolio",
            description:"A portfolio website built using Next.js and hosted on Versel ",
            image:'https://i.ibb.co/xHTJ7Vc/portfolio-desktop.png',
            github:'https://github.com/MayurDeopa',
            live:"https://portfolio-ten-eta-98.vercel.app",
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