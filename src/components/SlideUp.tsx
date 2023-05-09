"use client"
import React, { useEffect, useRef, ReactNode, useState } from "react"

interface Props {
  offset?: string
  children?: ReactNode
}

export default function SlideUp({ children, offset = "0px" }: Props) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { rootMargin: offset }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }
  }, [ref, offset])

  return (
    <div ref={ref} className={`relative ${isVisible ? 'opacity-100 transform translate-y-0 transition-all duration-500 ease-out' : 'opacity-0 transform translate-y-5'}`}>
      {children}
    </div>
  )
}
