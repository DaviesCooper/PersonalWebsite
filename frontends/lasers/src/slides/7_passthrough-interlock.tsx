import { ColumnSlide } from '../components/layouts/ColumnSlide';
import { defineSlide } from './defineSlide';

const BASE = import.meta.env.BASE_URL;

function SlidePassthroughInterlock(): JSX.Element {
  return (
    <ColumnSlide
      left={
        <div>
          <p>The Thunder has a passthrough door that does not have interlocks for it.</p>
          <p>This turns the machine from a class 2 laser to a class 4 laser.</p>
          <br/>
          <p>Using the passthrough door is cause for membership termination.</p>
        </div>
      }
      right={
        <div className="slide-12d2-img slide-12d2-img-back">
          <img
            src={`${BASE}passthrough-door.png`}
            alt="Thunder passthrough door"
            draggable={false}
          />
        </div>
      }
    />
  );
}

export default defineSlide(SlidePassthroughInterlock, {
  id: 'passthrough-interlock',
  title: 'Safety',
  whenTool: 'thunder',
});
