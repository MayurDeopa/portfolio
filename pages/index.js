import Image from 'next/image';
import styles from '../styles/HomePage.module.css'

const Home =()=>{
  return (

        <div className="page">
          <div className={styles.home_page}>
            <section className={styles.home_sections}>
              <header className={styles.home_section_header} style={{animation:"riseFadeIn 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)  forwards"}}> Mayur</header>
              <header className={styles.home_section_header} style={{opacity:0,animation:"riseFadeIn 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) 0.2s  forwards"}}> Deopa</header>
              {/* <p>Frontend Developer with nearly 2 years of experience creating engaging, responsive, and user-centered web interfaces. Skilled in HTML, CSS, JavaScript, and frameworks like React, I am passionate about building seamless digital experiences that blend functionality with visual appeal. With a strong focus on performance and usability, I transform design concepts into interactive, accessible web solutions. Explore my projects to see how I can bring innovative and efficient front-end solutions to life.</p>
              <div className={styles.home_buttons_wrapper}>
                <a 
                  className={styles.home_button}
                  href='https://drive.google.com/drive/folders/1f-ouGVYJUYVc2DueB8fhw64uk64biysU?usp=sharing'
                  target="_blank" 
                  rel="noreferrer"
                >Resume</a>
                <a className={styles.home_button} href='https://github.com/MayurDeopa' target="_blank" rel="noreferrer">GitHub</a>
              </div> */}
            </section>
            {/* <section className={styles.home_sections}>
              <Image 
                src={"https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_582,h_644/https://novaflip.com/wp-content/uploads/2020/08/illustrations21-06.png" } 
                layout='intrinsic' 
                width={500} 
                height={500} 
                alt=''
                placeholder="blue"
              />
            </section> */}
          </div>
        </div>
  )
}

export default Home;
