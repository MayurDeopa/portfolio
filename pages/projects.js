
import styles from "../styles/Projects.module.css"

const Projects = ()=>{
    return(
        <div className={styles.page_wrapper}>
            <div className={`${styles.section}   ${styles.slide_in_left}`}>
                <h1 className={styles.section_header} style={{opacity:0,animation:"riseFadeIn 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) 0.3s forwards"}}>Work</h1>
            </div>
               <div className={`${styles.section}  ${styles.slide_in_right}`}>
                 <h1 className={styles.section_header} style={{opacity:0,animation:"riseFadeIn 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) 0.5s forwards"}}>Random</h1>
               </div>
        </div>
    )
}

export default Projects