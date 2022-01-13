
import styles from '../styles/HomePage.module.css'

const Home =()=>{
  return (

      <div className="page">
        <div className={styles.home_page}>
          <section className={styles.home_sections}>Left</section>
          <section className={styles.home_sections}>Right</section>
        </div>
      </div>
  )
}

export default Home;