import { Slide } from '../Slide'

interface ReviewSlideProps {
  isNested?: boolean
}

function ReviewSlide({ isNested }: ReviewSlideProps) {
  return (
    <Slide isNested={isNested}>
      <section>
        <h2>📋 Summary</h2>
        <div className="summary-grid">
          <div className="summary-item fragment">
            <span className="summary-number">1</span>
            <span>Variables store data with labels</span>
          </div>
          <div className="summary-item fragment">
            <span className="summary-number">2</span>
            <span>Three main types: String, Number, Boolean</span>
          </div>
          <div className="summary-item fragment">
            <span className="summary-number">3</span>
            <span>Use clear names for your variables</span>
          </div>
        </div>
        <div className="next-steps fragment">
          <h4>📖 Next Lesson:</h4>
          <p>Conditional Statements (if/else)</p>
        </div>
      </section>
    </Slide>
  )
}

export default function ReviewSlidePreview() {
  return <ReviewSlide />
}

export { ReviewSlide }
