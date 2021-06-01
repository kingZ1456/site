import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    
    <h1>My Experiences</h1>
    
    <div style={{display:'flex', paddingTop:"100px"}}>
        <div>
          <h2 style={{paddingBottom:'0px'}}>USC Science Councillor  <h5 style={{fontSize:'15px',paddingTop:'5px'}}>(February, 2021 - Present)</h5></h2>
          <h4 style={{fontWeight:'normal'}}>Elected to represent Western students enrolled in the Faculty of Science. </h4>
        </div>


        <div style={{paddingLeft:'40px'}}>
        <StaticImage
          src="../images/usc.svg"
          width={200}
          height={170}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          />

        </div>

    </div>


    <div style={{display:'flex', paddingTop:"50px"}}>
        <div>
          <h2 style={{paddingBottom:'0px'}}>W5 Vice President <h5 style={{fontSize:'15px',paddingTop:'5px'}}>(March, 2021 - Present)</h5></h2>
          <h4 style={{fontWeight:'normal'}}>Organizing events for the Western entrepreneurship community.</h4>
        </div>


        <div style={{paddingLeft:'100px'}}>
        <StaticImage
          src="../images/w5 logo.svg"
          width={400}
          height={170}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          />

        </div>
    </div>


  </Layout>
)

export default SecondPage
