import Image from 'next/image';
import styles from '../styles/HomePage.module.css'

const Home =()=>{
  return (

      <div className="page">
        <div className={styles.home_page}>
          <section className={styles.home_sections}>
            <header className={styles.home_section_header}>Hi, my name is Mayur,<br/>I am a Web Developer</header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <div className={styles.home_buttons_wrapper}>
              <a className={styles.home_button}>Resume</a>
              <a className={styles.home_button} href='https://github.com/MayurDeopa' target="_blank">GitHub</a>
            </div>
          </section>
          <section className={styles.home_sections}><Image src={"https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_582,h_644/https://novaflip.com/wp-content/uploads/2020/08/illustrations21-06.png" } layout='intrinsic' width={500} height={500} alt=''/></section>
        </div>
      </div>
  )
}

export default Home;