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
          width: `100px`,
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
        <p style={{ margin: 0, marginTop: "0.60rem" }}>{description}</p>
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
