import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

const Header = ({ siteTitle, description }) => (
  <header
    style={{
      position: "relative",
      // background: `linear-gradient(90deg, rgba(68,62,166,1) 0%, rgba(0,212,255,1) 100%)`,
      animation: "BackgroundRotate 16s ease infinite",
      background: "linear-gradient(270deg, #6157f0, #d2761c)",
      backgroundSize: "400% 400%",
      color: "white",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <div
        style={{
          maxWidth: `100px`,
          width: "100%",
          opacity: 0.8,
        }}
      >
        <Image />
      </div>
      <div style={{ padding: `1.45rem 1.0875rem` }}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `inherit`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <p style={{ marginBottom: "0.60rem", marginTop: "0.60rem" }}>
          {description}
        </p>
        <div
          style={{
            display: "grid",
            width: "fit-content",
            gridGap: 10,
            gridTemplateColumns: "auto auto auto",
          }}
        >
          <Link to="/" style={{ border: "1px solid", padding: "5px 10px" }}>
            Home
          </Link>
          <Link to="/blog" style={{ border: "1px solid", padding: "5px 10px" }}>
            Blog
          </Link>
          <a
            href="mailto:daniel@tabak.ca?subject=Inquiry from tabak.ca"
            style={{ border: "1px solid", padding: "5px 10px" }}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
