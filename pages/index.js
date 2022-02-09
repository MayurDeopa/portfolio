import Image from 'next/image';
import Head from 'next/head'
import styles from '../styles/HomePage.module.css'

const Home =()=>{
  return (

        <div className="page">
          <Head>
            <title>Mayur Deopa</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <div className={styles.home_page}>
            <section className={styles.home_sections}>
              <header className={styles.home_section_header}>Hi, my name is Mayur,<br/>I am a Web Developer</header>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <div className={styles.home_buttons_wrapper}>
                <a 
                  className={styles.home_button}
                  href='https://drive.google.com/drive/folders/1f-ouGVYJUYVc2DueB8fhw64uk64biysU?usp=sharing'
                  target="_blank" 
                  rel="noreferrer"
                >Resume</a>
                <a className={styles.home_button} href='https://github.com/MayurDeopa' target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </section>
            <section className={styles.home_sections}>
              <Image 
                src={"https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_582,h_644/https://novaflip.com/wp-content/uploads/2020/08/illustrations21-06.png" } 
                layout='intrinsic' 
                width={500} 
                height={500} 
                alt=''
                placeholder="blue"
              />
            </section>
          </div>
        </div>
  )
}

export default Home;