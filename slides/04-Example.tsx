import { Slide } from '../Slide'

interface ExampleSlideProps {
  isNested?: boolean
}

function ExampleSlide({ isNested }: ExampleSlideProps) {
  const codeExample = `// Declare variables
let name = "Student";
let score = 0;

// Update the score
score = score + 10;

// Display result
console.log(name + " scored " + score);`

  return (
    <Slide isNested={isNested}>
      <section>
        <h2>👨‍💻 Code Example</h2>
        <pre className="code-block">
          <code>{codeExample}</code>
        </pre>
        <div className="output-preview fragment">
          <span className="output-label">Output:</span>
          <span className="output-text">Student scored 10</span>
        </div>
      </section>
    </Slide>
  )
}

export default function ExampleSlidePreview() {
  return <ExampleSlide />
}

export { ExampleSlide }
