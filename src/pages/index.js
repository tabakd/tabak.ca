import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <script dangerouslySetInnerHTML={{ __html: `NekoType="marmalade"` }} />
    <h1 id="nl">
      <script src="https://webneko.net/n20171213.js" />
    </h1>
    <h4>I build state of the art web software.</h4>
    <p>
      If your web app suffers from scaling, reliability, or developer
      productivity issues, please reach out for a <strong>free</strong>{" "}
      evaluation.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h4>Connect with me!</h4>
    <h4>
      <a href="mailto:daniel@tabak.ca?subject=Inquiry from tabak.ca">Email</a>
    </h4>
    <h4>
      <a href="https://www.linkedin.com/in/tabakd/">LinkedIn</a>
    </h4>
  </Layout>
)

export default IndexPage
