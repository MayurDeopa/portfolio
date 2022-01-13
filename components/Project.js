import Image from 'next/image';
import styles from '../styles/Projects.module.css'
import { FaDatabase, FaNodeJs, FaReact } from 'react-icons/fa';

const Project =(props)=>{
    const {details} = props
    return (
        <div className={styles.project}>
                <img src={details.image} className={styles.project_image}/>
                <section className={styles.project_details}>
                    <section className={styles.project_details_sub_section}>
                        <header className={styles.project_header}>
                            Description
                        </header>
                        <p>{details.description}</p>
                    </section>
                    <section className={styles.project_details_sub_section}>
                        <header className={styles.project_header}>
                            TechStack
                        </header>
                        <div className={styles.project_tech_icons}>
                            <FaReact/>
                            <FaNodeJs/>
                            <FaDatabase/>
                        </div>
                    </section>
                </section>
            </div>
    )
}

export default Project;