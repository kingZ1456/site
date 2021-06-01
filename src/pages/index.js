import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1 style={{paddingLeft:'30px'}}>Hi, Nice to meet you, I'm <span style={{color:'blue', fontWeight:'bold'}}>Zohaib Adnan!</span></h1>

    <div style={{display: 'flex',
      }}>
    
    <div style={{paddingTop:'30px', paddingRight:'30px', paddingLeft:'30px'}}>
    <StaticImage
      src="../images/image2.jpg"
      width={300}
      height={350}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem`}}
    />
    </div>

    <div style={{paddingTop:'30px'}}>
    <StaticImage
      src="../images/Personal Image.svg"
      width={300}
      height={350}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem`}}
    />
    </div>

      

    <div style={{paddingTop:'30px', paddingLeft:'30px'}}>
    <StaticImage
      src="../images/KingZ.jpg"
      width={300}
      height={350}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem`}}
    />
    </div>


    </div>


    <h1 style={{paddingTop:'100px', paddingBottom:'5px'}}>About Me</h1>

      <div>
          <h4 style={{fontWeight:'normal', paddingTop:'20px'}}>I’m a <span style={{ color:'blue', fontWeight:'bold'}}>Computer Science </span> 
          and <span style={{color:'red', fontWeight:'bold'}}>Business 
          </span> student at  <span style={{color:'purple', fontWeight:'bold'}}> Western University</span>. </h4>

          <h4 style={{fontWeight:'normal', paddingTop:'50px'}}>I love <span style={{ color:'green', fontWeight:'bold'}}>Entrepreneurship</span>, 
          <span style={{color:'rgb(255, 51, 153)', fontWeight:'bold'}}> consulting
          </span>, and <span style={{color:'rgb(0, 204, 255)', fontWeight:'bold'}}> student politics</span>. </h4>


          <h4 style={{fontWeight:'normal', paddingTop:'50px'}}>I’m originally from <span style={{ color:'rgb(0, 204, 0)', fontWeight:'bold'}}>Oakville </span>
           and I love <span style={{color:'rgb(255, 153, 51)', fontWeight:'bold'}}>basketball</span>. </h4>


      </div>


      <div style={{paddingTop:'30px', paddingBottom:'30px'}}>
          <StaticImage
          src="../images/vector3.svg"
          width={700}
          height={5}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem`}}
          />
      </div>




      <div  style={{display:'flex'}}>
      
      <div style={{paddingRight:'20px', paddingLeft:'20px'}}>
      <StaticImage
          src="../images/western_gang.svg"
          width={150}
          height={170}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          />
      </div>

      <div style={{paddingRight:'20px', paddingLeft:'20px'}}>
      <StaticImage
          src="../images/entre bulb.svg"
          width={155}
          height={150}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          />
        </div>

      <div style={{paddingRight:'20px', paddingLeft:'20px'}}>
      <StaticImage
          src="../images/lebron.svg"
          width={155}
          height={170}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          />
      </div>

      </div>






  </Layout>
)

export default IndexPage
