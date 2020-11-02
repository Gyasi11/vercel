import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.hero}>
        <figure id={styles.bgImage}>
        <img src="/laptop-on-counter.jpg" />
        <figcaption>
          <h1>Gyasi-Linje</h1>
          <p>Developer + Content Creator</p>
        </figcaption>
        </figure>
      </div>
      <div className={styles.professionalExperiences}>
        <div className={styles.gridItem}>
        
        </div>
        <div className={styles.gridItem}>
          <div className={styles.circularIcon}></div>
          <h4>Fullstack and Frontend Developer Experience</h4>
          <p className={styles.copy}>
          <p>
              The Fall of October 2019 I started working as a Digital Frontend Developer for Progressive Insurance. Since working at Progressive I've programmed using langauges such as: JavaScript, HTML5, CSS3 and worked in VueJS.
            </p>

            <p> I've modernized Progressive Insurances brand and design guidelines site by re-developing the app from Vanilla HTML,CSS and JS to a VueJS application.
              While working at Progressive Insurance I've also built new web pages for Progressive.com, display ads, an Android Application new modules for Progressive.com developers 
               </p>
            After graduating with a degree in Computer science May of 2018 I work as a full stack application developer at Hyland Software.
            During my time at Hyland I programmed with languages such as: C#, JavaScript, TypeScript, and worked in AngularJS and Angular 2+.
            </p>
            <p> While at Hyland I helped our Development team re-design, modernize and build new responsive UI's for Hyland Content Connect Angular App.
          </p>
            
         
            <button>Download resume here</button>
         
        </div>
        <div className={styles.gridItem}>
          
        </div>
        <div className={styles.gridItem}>
          
        </div>
      </div>
      <div className={styles.youTube}>

      </div>
  
    </div>

  )
}
