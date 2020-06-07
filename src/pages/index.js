import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styles from './index.module.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div  style={{display: 'flex', justifyContent: 'center'}}>
    <h1>Unfortunately you are too late 😔.</h1>
    </div>
   
    <div  style={{display: 'flex', justifyContent: 'center'}}>
    <h3>Game Over.</h3>
    </div>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    <div  style={{marginTop: '80px', display: 'flex', justifyContent: 'center'}}>

    <h3>Don't miss the next one...</h3>
    </div>
    <div className={styles.formWrapper}> 
    <form className={styles.form}>
      <div>
      <input className={styles.input} type="text" value="email" placeholder="Subscribe..."/>
      </div>
      <div>
      <button className={styles.button}>
        Subsribe Now
      </button>
      </div>
    </form>
    </div>
  </Layout>
)

export default IndexPage
