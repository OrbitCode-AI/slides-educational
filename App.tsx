import { useEffect, useRef, useState } from 'preact/hooks'
import Reveal from 'reveal.js'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/solarized.css'
import './styles.css'

import { TitleSlide } from './slides/01-Title'
import { ObjectivesSlide } from './slides/02-Objectives'
import { ConceptSlide } from './slides/03-Concept'
import { ExampleSlide } from './slides/04-Example'
import { PracticeSlide } from './slides/05-Practice'
import { ReviewSlide } from './slides/06-Review'

export default function App() {
  const deckRef = useRef<HTMLDivElement>(null)
  const [_slideState, setSlideState] = useState({ h: 0, v: 0, f: -1 })

  useEffect(() => {
    if (!deckRef.current) return

    const deck = new Reveal(deckRef.current, {
      controls: true,
      progress: true,
      hash: false,
      embedded: true,
      transition: 'fade',
    })

    deck.on('slidechanged', () => {
      const indices = deck.getIndices()
      setSlideState({ h: indices.h, v: indices.v, f: indices.f ?? -1 })
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
  }, [])

  return (
    <div className="reveal" ref={deckRef} style={{ position: 'fixed', inset: 0 }}>
      <div className="slides">
        <TitleSlide isNested />
        <ObjectivesSlide isNested />
        <ConceptSlide isNested />
        <ExampleSlide isNested />
        <PracticeSlide isNested />
        <ReviewSlide isNested />
      </div>
    </div>
  )
}
