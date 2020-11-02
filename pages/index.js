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
          <h4>Developer + Content Creator</h4>
        </figcaption>
        </figure>
      </div>
      <div className={styles.professionalExperiences}>
        <div className={styles.gridItem}>
        
        </div>
        <div className={styles.gridItem}>
          <div className={styles.circularIcon}>
            <img src="/coding.png" />
          </div>
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
        <div className={styles.gridItem}></div>
        <div className={styles.gridItem}>
          <div id={styles.cardDevelopment}>
            <img src="/blake-connally-B3l0g6HLxr8-unsplash.jpg"/>
              <h3> My Top Programming Skillsets </h3>
              <p>My favorite programming Languages and Frameworks are JavaScript, Python, Material Design,  CSS/HTML, Angular, VueJS, and Next.JS. </p>
          </div>
        </div>
        <div className={styles.gridItem}></div>
      </div>

      <div className={styles.youTube}>
        <div className={styles.gridItem}></div>
        <div className={styles.gridItem}>
        <div id={styles.contentImage}>
          <figure >
            <img src="/contentCreation.jpg"/>
          </figure>
         
          </div>
        </div>
        <div className={styles.gridItem}></div>
        <div className={styles.gridItem}>
        <div className={styles.circularIcon}>
          <figure>
            <img src="/camera.png" />
          </figure>
            
          </div>
          <h4>YoutTube Content Creator</h4>
      
         <p>
           Over the past few years on YouTube I've had the wonderful opportunity gain over 60K subscribers along with over 4 million channels views.
           Through this experience I've found a new passion of mine which is digital content creation.
          </p>
          <p>
            One to two times a week I make videos on YouTube centered around education (software engineering), consumer tech, and lifestyle.
         </p>
         <p>
           I've also enjoyed product photography and showing my process of creating the semi-perfect desk setup as a content creator and youtuber.
         </p>
        <button>Checkout my YouTube Channel!</button>
        </div>
        <div className={styles.gridItem}></div>
      </div>
    </div>

  )
}
