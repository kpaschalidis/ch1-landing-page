import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from './index.module.css';

class IndexPage extends React.Component {
  state = {
    email: ''
  }

  handleOnChange = (e) => {
    this.setState({
      email: e.currentTarget.value
    })
  }
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1>Unfortunately you are too late <span>😔</span>.</h1>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h3>Game Over.</h3>
        </div>
        <div style={{ marginTop: '80px', display: 'flex', justifyContent: 'center' }}>

          <h3>Don't miss the next one...</h3>
        </div>
        <div className={styles.formWrapper}>
          <form className={styles.form}>
            <div>
              <input onChange={this.handleOnChange} className={styles.input} type="text" value={this.state.email} placeholder="Subscribe..." />
            </div>
            <div>
              <button className={styles.button}>
                Subsribe Now
      </button>
            </div>
          </form>
        </div>
      </Layout>
    );
  }
}
export default IndexPage
