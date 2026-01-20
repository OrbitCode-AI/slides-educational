import { Slide } from '../Slide';

interface ObjectivesSlideProps {
  isNested?: boolean;
  objectives?: string[];
}

const defaultObjectives = [
  'Understand the basics of programming concepts',
  'Write your first lines of code',
  'Create a simple interactive program',
  'Debug common beginner mistakes',
];

function ObjectivesSlide({ isNested, objectives = defaultObjectives }: ObjectivesSlideProps) {
  return (
    <Slide isNested={isNested}>
      <section>
        <h2>📚 Learning Objectives</h2>
        <p className="intro-text">By the end of this lesson, you will be able to:</p>
        <ul className="objectives-list">
          {objectives.map((objective, i) => (
            <li key={i} className="fragment fade-right">
              <span className="check-icon">✓</span>
              {objective}
            </li>
          ))}
        </ul>
      </section>
    </Slide>
  );
}

export default function ObjectivesSlidePreview() {
  return <ObjectivesSlide />;
}

export { ObjectivesSlide };
