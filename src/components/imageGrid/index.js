import React from "react"

import "./index.css"

const ImageGrid = ({ images }) => {
  return (
    <div className="ImageGrid">
      {images.map(src => (
        <img
          style={{
            width: 150,
            height: 150,
            marginBottom: 0,
            objectFit: "cover",
            borderRadius: 3,
          }}
          src={src}
        />
      ))}
    </div>
  )
}

export default ImageGrid
