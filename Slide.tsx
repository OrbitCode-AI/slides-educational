import { useEffect, useRef } from 'react'
import type { ComponentChildren } from 'preact'
import Reveal from 'reveal.js'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/solarized.css'
import './styles.css'

interface SlideProps {
  children: ComponentChildren
  isNested?: boolean
}

function Slide({ children, isNested }: SlideProps) {
  const deckRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isNested || !deckRef.current) return
    const deck = new Reveal(deckRef.current, {
      controls: true,
      progress: true,
      hash: false,
      embedded: true,
      transition: 'fade',
    })
    deck.initialize()

    const resizeObserver = new ResizeObserver(() => {
      if (deck.isReady()) (deck as any).layout()
    })
    resizeObserver.observe(deckRef.current)

    return () => {
      resizeObserver.disconnect()
      try {
        deck.destroy()
      } catch {}
    }
  }, [isNested])

  if (isNested) return children

  return (
    <div className="reveal" ref={deckRef} style={{ position: 'fixed', inset: 0 }}>
      <div className="slides">{children}</div>
    </div>
  )
}

export default function SlidePreview() {
  return (
    <Slide>
      <section>
        <h2>Educational Slide</h2>
        <p>Clear, focused learning content.</p>
      </section>
    </Slide>
  )
}

export { Slide }
