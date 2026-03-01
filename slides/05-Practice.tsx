import { Slide } from '../Slide'

interface PracticeSlideProps {
  isNested?: boolean
}

function PracticeSlide({ isNested }: PracticeSlideProps) {
  return (
    <Slide isNested={isNested}>
      <section>
        <h2>🎯 Practice Exercise</h2>
        <div className="exercise-box">
          <h4>Your Task:</h4>
          <p>Create variables to store information about your favorite book:</p>
          <ul>
            <li>Book title (string)</li>
            <li>Number of pages (number)</li>
            <li>Have you finished it? (boolean)</li>
          </ul>
        </div>
        <div className="timer-hint fragment">
          <span>⏱️</span>
          <span>Take 5 minutes to try this!</span>
        </div>
      </section>
    </Slide>
  )
}

export default function PracticeSlidePreview() {
  return <PracticeSlide />
}

export { PracticeSlide }
