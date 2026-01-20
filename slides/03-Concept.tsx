import { Slide } from '../Slide';

interface ConceptSlideProps {
  isNested?: boolean;
}

function ConceptSlide({ isNested }: ConceptSlideProps) {
  return (
    <Slide isNested={isNested}>
      <section>
        <section>
          <h2>💡 Key Concept: Variables</h2>
          <p>Variables are like labeled boxes that store data</p>
          <div className="concept-diagram fragment">
            <div className="box">
              <span className="box-label">name</span>
              <span className="box-value">"Alice"</span>
            </div>
            <div className="box">
              <span className="box-label">age</span>
              <span className="box-value">25</span>
            </div>
          </div>
        </section>
        <section>
          <h3>Types of Variables</h3>
          <div className="type-cards">
            <div className="type-card fragment">
              <span className="type-icon">📝</span>
              <span className="type-name">String</span>
              <span className="type-example">"Hello"</span>
            </div>
            <div className="type-card fragment">
              <span className="type-icon">🔢</span>
              <span className="type-name">Number</span>
              <span className="type-example">42</span>
            </div>
            <div className="type-card fragment">
              <span className="type-icon">✅</span>
              <span className="type-name">Boolean</span>
              <span className="type-example">true</span>
            </div>
          </div>
        </section>
        <section>
          <h3>💭 Think About It</h3>
          <blockquote>
            "What kind of data would you store in a variable for a user's email address?"
          </blockquote>
          <p className="fragment">Answer: A string! 📧</p>
        </section>
      </section>
    </Slide>
  );
}

export default function ConceptSlidePreview() {
  return <ConceptSlide />;
}

export { ConceptSlide };
