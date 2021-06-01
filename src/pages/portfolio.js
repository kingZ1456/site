import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <Seo title="Page two" />
    
    <h1 style={{paddingLeft:'20px'}}>My Graphic Design Portfolio</h1>
    

  <div style={{display:'flex'}}>

    <div style={{padding:'20px'}}>
    <StaticImage
      src="../images/portfolio1.svg"
      width={400}
      height={400}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem`}}
    />
    </div>


    <div style={{padding:'20px'}}>
    <StaticImage
      src="../images/portfolio2.svg"
      width={400}
      height={400}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem`}}
    />
    </div>

  </div>




  <div style={{display:'flex'}}>

    <div style={{padding:'20px'}}>
    <StaticImage
      src="../images/portfolio3.svg"
      width={400}
      height={400}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem`}}
    />
    </div>


    <div style={{padding:'20px'}}>
    <StaticImage
      src="../images/portfolio4.svg"
      width={400}
      height={400}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem`}}
    />
    </div>

  </div>






  <div style={{display:'flex'}}>

<div style={{padding:'20px'}}>
<StaticImage
  src="../images/election.png"
  width={400}
  height={400}
  quality={95}
  formats={["AUTO", "WEBP", "AVIF"]}
  alt="A Gatsby astronaut"
  style={{ marginBottom: `1.45rem`}}
/>
</div>


<div style={{padding:'20px'}}>
<StaticImage
  src="../images/portfolio5.svg"
  width={400}
  height={400}
  quality={95}
  formats={["AUTO", "WEBP", "AVIF"]}
  alt="A Gatsby astronaut"
  style={{ marginBottom: `1.45rem`}}
/>
</div>

</div>







  </Layout>
)

export default ThirdPage
