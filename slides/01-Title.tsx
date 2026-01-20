import { Slide } from '../Slide';

interface TitleSlideProps {
  isNested?: boolean;
  title?: string;
  subtitle?: string;
  lesson?: string;
}

function TitleSlide({
  isNested,
  title = 'Introduction to Programming',
  subtitle = 'Building Your First Application',
  lesson = 'Lesson 1',
}: TitleSlideProps) {
  return (
    <Slide isNested={isNested}>
      <section className="title-slide">
        <span className="lesson-badge">{lesson}</span>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <div className="duration">
          <span>⏱️ 45 minutes</span>
        </div>
      </section>
    </Slide>
  );
}

export default function TitleSlidePreview() {
  return <TitleSlide />;
}

export { TitleSlide };
