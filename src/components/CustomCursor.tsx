import React, { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    let x = 0, y = 0
    let rx = 0, ry = 0

    const handleMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
    }

    const handleEnter = () => setIsHover(true)
    const handleLeave = () => setIsHover(false)

    const animate = () => {
      rx += (x - rx) * 0.12
      ry += (y - ry) * 0.12

      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`
        ringRef.current.style.top = `${ry}px`
      }
      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`
        dotRef.current.style.top = `${y}px`
      }
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMove)

    const interactable = document.querySelectorAll('a, button, [data-cursor-hover]')
    interactable.forEach(el => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })

    const raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div
        ref={ringRef}
        className={`cursor-ring ${isHover ? 'cursor-hover' : ''}`}
        style={{ pointerEvents: 'none' }}
      />
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ pointerEvents: 'none' }}
      />
    </>
  )
}
