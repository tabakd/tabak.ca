import React from "react"

import { IoIosMail, IoLogoLinkedin } from "react-icons/io"
import Layout from "../components/layout"

import SEO from "../components/seo"

const Link = props => (
  <a
    {...props}
    style={{
      animation: "ColorRotate 16s ease infinite",
      marginRight: "15px",
      display: "inline-flex",
      alignItems: "center",
      padding: "10px 15px",
      borderRadius: 3,
      border: "2px solid hsla(0, 0%, 0%, 0.8)",
    }}
  />
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h4>I build state of the art web software.</h4>
    <p>
      If your web app suffers from scaling, reliability, or developer
      productivity issues, please reach out for a <strong>free</strong>{" "}
      evaluation.
    </p>
    <div style={{ display: "flex" }}>
      <Link href="mailto:daniel@tabak.ca?subject=Inquiry from tabak.ca">
        <IoIosMail style={{ marginRight: "5px" }} /> Email
      </Link>
      <Link href="https://www.linkedin.com/in/tabakd/">
        <IoLogoLinkedin style={{ marginRight: "5px" }} /> LinkedIn
      </Link>
    </div>
    <hr />
    <h4>Who am I?</h4>
    <p>
      I am a <i>[software developer, entrepreneur, digital nomad]</i> from
      Toronto, Canada.
    </p>
    <p> I love to solve problems for myself and others.</p>
    <p>Here are some other things I like:</p>
    <div
      style={{
        display: "grid",
        gridGap: "15px",
        width: "fit-content",
        gridTemplateColumns: "auto auto auto",
      }}
    >
      <img
        style={{
          width: 150,
          height: 150,
          marginBottom: 0,
          objectFit: "cover",
          borderRadius: 3,
        }}
        src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
      />
      <img
        style={{
          width: 150,
          height: 150,
          marginBottom: 0,
          objectFit: "cover",
          borderRadius: 3,
        }}
        src="https://images.unsplash.com/photo-1528712306091-ed0763094c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80"
      />
      <img
        style={{
          width: 150,
          height: 150,
          marginBottom: 0,
          objectFit: "cover",
          borderRadius: 3,
        }}
        src="https://images.unsplash.com/photo-1535979014625-490762ceb2ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
      />

      <img
        style={{
          width: 150,
          height: 150,
          marginBottom: 0,
          objectFit: "cover",
          borderRadius: 3,
        }}
        src="https://images.unsplash.com/photo-1470192736366-c0d57f198696?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1402&q=80"
      />

      <img
        style={{
          width: 150,
          height: 150,
          marginBottom: 0,
          objectFit: "cover",
          borderRadius: 3,
        }}
        src="https://i.ibb.co/2PwF1fg/image.png"
      />
    </div>
  </Layout>
)

export default IndexPage
