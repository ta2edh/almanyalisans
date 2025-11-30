'use client'

import { useEffect, useRef } from 'react'

interface CommentsProps {
  term: string
}

export default function Comments({ term }: CommentsProps) {
  const commentsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!commentsRef.current) return

    // Önceki script'leri temizle
    commentsRef.current.innerHTML = ''

    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', 'ta2edh/almanyalisans')
    script.setAttribute('data-repo-id', 'R_kgDOQfceww')
    script.setAttribute('data-mapping', 'number')
    script.setAttribute('data-term', '1')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'bottom')
    script.setAttribute('data-theme', 'light')
    script.setAttribute('data-lang', 'tr')
    script.crossOrigin = 'anonymous'
    script.async = true

    commentsRef.current.appendChild(script)
  }, [term])

  return (
    <div className="giscus-wrapper">
      <div ref={commentsRef} className="giscus" />
    </div>
  )
}
