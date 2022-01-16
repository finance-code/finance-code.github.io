import React, { useRef, useEffect, RefObject } from "react"

interface RepoProps {
    repo: string
}

export default function Comment({ repo }: RepoProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const utterances = document.createElement("script")
    const attributes = {
      src: "https://utteranc.es/client.js",
      repo: repo,
      "issue-term": "pathname",
      label: "comment",
      theme: "github-light",
      crossOrigin: "anonymous",
      async: "true",
    }
    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })
    containerRef.current?.appendChild(utterances)
  }, [repo])

  return <div id="comment" ref={containerRef} />
}