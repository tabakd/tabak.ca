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
    <p>Here are some other things I like:</p>

    <ImageGrid
      images={[
        "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        "https://images.unsplash.com/photo-1528712306091-ed0763094c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80",
        "https://images.unsplash.com/photo-1535979014625-490762ceb2ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        "https://images.unsplash.com/photo-1470192736366-c0d57f198696?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1402&q=80",
        "https://i.ibb.co/2PwF1fg/image.png",
        "https://images.unsplash.com/photo-1520949201978-45105812d952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
      ]}
    />
    <hr />
    <p>Most of the time I'm making things using these tools:</p>

    <ImageGrid
      images={[
        "https://www.i-programmer.info/images/stories/prof/iprogrammer/JavascriptName/JSlogo.jpg",
        "http://blog.klocwork.com/wp-content/uploads/fly-images/10699/python-logo-348x350-c.png",
        "https://benbrewerbowman.com/static/media/react-skill.516f904f.svg",
      ]}
    />
    <p>
      <Link
        to="blog"
        style={{
          animation: "ColorRotate 16s ease infinite",
        }}
      >
        Read more
      </Link>
    </p>
    <hr />
    <h4>I build state of the art web software.</h4>
    <p>
      If your product suffers from scaling, reliability, or developer
      productivity issues, please reach out for a{" "}
      <strong>free evaluation.</strong>{" "}
    </p>
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
