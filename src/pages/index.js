import React from "react"
import { Link } from "gatsby"
import { IoIosMail, IoLogoLinkedin } from "react-icons/io"
import Layout from "../components/layout"

import SEO from "../components/seo"
import ImageGrid from "../components/imageGrid"

const LinkButton = props => (
  <a
    {...props}
    style={{
      animation: "ColorRotate 16s ease infinite",
      marginRight: "15px",
      display: "inline-flex",
      alignItems: "center",
      padding: "10px 15px",
      paddingLeft: 0,
      borderRadius: 3,
      // border: "2px solid hsla(0, 0%, 0%, 0.8)",
    }}
  />
)

const IndexPage = () => (
  <Layout>
    <SEO
      title="Daniel Tabak's home on the World Wide Web."
      keywords={[`gatsby`, `application`, `react`]}
    />

    <h4>Who am I?</h4>
    <p>
      I am a <i>[software developer, entrepreneur, digital nomad]</i> from
      Toronto, Canada.
    </p>
    <p> I love using technology to solve problems for myself and others.</p>
    <div style={{ display: "flex" }}>
      <LinkButton href="mailto:daniel@tabak.ca?subject=Inquiry from tabak.ca">
        <IoIosMail style={{ marginRight: "5px" }} /> Email
      </LinkButton>
      <LinkButton href="https://www.linkedin.com/in/tabakd/">
        <IoLogoLinkedin style={{ marginRight: "5px" }} /> LinkedIn
      </LinkButton>
    </div>
  </Layout>
)

export default IndexPage
