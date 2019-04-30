import React, { useEffect, useState, useRef } from "react"

import "./index.css"
import { set } from "idb-keyval"

const useAnimation = animate => {
  useEffect(() => {
    let fps = 15
    let now
    let then = Date.now()
    let interval = 1000 / fps
    let delta
    let animationFrame

    const draw = () => {
      animationFrame = requestAnimationFrame(draw)

      now = Date.now()
      delta = now - then

      if (delta > interval) {
        then = now - (delta % interval)

        animate()
      }
    }

    draw()
    return () => {
      cancelAnimationFrame(animationFrame)
    }
  })
}

const useBunnyAnimation = direction => {
  const frames = {
    n: [0, 10],
    s: [10, 10],
    e: [20, 10],
    w: [30, 10],
  }

  let skip = frames[direction][0]
  let limit = frames[direction][1]

  const [frame, setFrame] = useState(skip)

  const stepFrame = () => setFrame(skip + (frame % (limit || 1000)) + 1)

  return { frame, stepFrame }
}

const useBunnyPosition = ref => {
  // var [pageX, setPageX] = useState()
  // var [pageY, setPageY] = useState()

  // function onMouseUpdate(e) {
  //   setPageX(e.pageX)
  //   setPageY(e.pageY)
  // }

  // useEffect(() => {
  //   document.addEventListener("mousemove", onMouseUpdate, false)

  //   return () => {
  //     document.removeEventListener("mousemove", onMouseUpdate)
  //   }
  // })

  const [top, setTop] = useState(100)
  const [left, setLeft] = useState(100)

  const stepPosition = () => {
    setTop(top + 10)
    // const x = pageX - left
    // const y = pageY - top
    // if (x > 0) {
    //   setLeft(left + 10)
    // } else {
    //   setLeft(left - 10)
    // }
    // if (y > 0) {
    //   setTop(top + 10)
    // } else {
    //   setTop(top - 10)
    // }
  }

  return {
    top,
    left,
    stepPosition,
  }
}

const useBunnyDirection = ref => {
  const [direction, setDirection] = useState("n")

  useEffect(() => {
    document.onmousemove = event => {
      const { top, left } = ref.current.getBoundingClientRect()
      const x = event.clientX - left
      const y = event.clientY - top
      if (x > 50) {
        setDirection("e")
      } else if (x < -50) {
        setDirection("w")
      } else if (y < 0) {
        setDirection("s")
      } else {
        setDirection("n")
      }
    }

    return () => {
      document.onmousedown = null
    }
  })

  return direction
}

const Bunny = () => {
  const ref = useRef(null)
  const direction = useBunnyDirection(ref)
  const { top, left, stepPosition } = useBunnyPosition(ref)

  const { frame, stepFrame } = useBunnyAnimation(direction)
  useAnimation(() => {
    stepFrame()
    stepPosition()
  })

  return (
    <div ref={ref} style={{ top, left }} className="bunny">
      <div className={" bunny_" + ("0" + frame).slice(-2)} />
    </div>
  )
}

export default Bunny
