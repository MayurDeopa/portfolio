import Image from 'next/image';
import styles from '../styles/Projects.module.css'

const IndividualProject =(props)=>{
    const {details} = props
    return (
        <div className={styles.project}>
            <div className={styles.project_image_container}>
                <Image src={details.image} className={styles.project_image} layout='intrinsic' width={500} height={300} alt=''/>
            </div>
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
                        {details.tech.map((t,index)=>{
                            return <div key={index}>{t}</div> 
                        })}
                    </div>
                </section>
                <section className={styles.project_buttons_wrapper}>
                    <a href={details.github} target="_blank" rel="noreferrer" className={styles.project_button}>GitHub</a>
                    <a href={details.live} target="_blank" rel="noreferrer" className={styles.project_button}>Live</a>
                </section>
            </section>
        </div>
    )
}

export default IndividualProject;