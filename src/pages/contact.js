import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"



const FourthPage = () => (
    <Layout>

  <div style={{display:'flex', paddingLeft:'50px'}}>

  <div style={{display:'block'}}>
  <h1 style={{paddingLeft:'10px'}}>Linkedin</h1>

  <a href="https://www.linkedin.com/in/zohaib12/">

  <StaticImage
          src="../images/linkedin.png"
          width={220}
          height={200}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          />
  </a>
  </div>







  <div style={{display:'block', paddingLeft:'400px'}}>
  <h1 style={{paddingLeft:'10px'}}>Instagram</h1>

  <a href="https://www.instagram.com/k.i.n.g.z.o.h/">

  <StaticImage
          src="../images/insta.jpg"
          width={200}
          height={200}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          />
  </a>
  </div>





  </div>

    </Layout>
)

export default FourthPage
