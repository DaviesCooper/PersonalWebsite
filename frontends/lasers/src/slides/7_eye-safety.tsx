import { ColumnSlide } from '../components/layouts/ColumnSlide';
import { defineSlide } from './defineSlide';
import './7_eye-safety.css';

const BASE = import.meta.env.BASE_URL;

function SlideEyeSafety(): JSX.Element {
  return (
    <ColumnSlide
      narrowLeft
      left={
        <div>
          <p>The laser is safe to use without any extra protection when it is fully closed.</p>
          <p>
            Any operation of the laser beam with any of the doors or access panels open poses a
            serious risk of skin and eye injury.
          </p>
        </div>
      }
      right={
        <div className="eye-safety-right">
          <ul className="eye-safety-classes">
            <li>
              <span className="eye-safety-class-label eye-safety-class-1">Class 1</span>: not
              hazardous during normal use due to low emission level or product design (1C: not
              hazardous to the eye due to built-in engineering safety features)
            </li>
            <li>
              <span className="eye-safety-class-label eye-safety-class-2">Class 2</span>: not
              hazardous for momentary eye exposure due to blink reflex (only applies to visible
              light lasers 400–700&nbsp;nm)
            </li>
            <li>
              <span className="eye-safety-class-label eye-safety-class-3">Class 3R</span>: may be
              hazardous to the eye if exposure time is prolonged, no risk of skin injury, intended
              for use where viewing of the beam can be controlled or restricted
            </li>
            <li>
              <span className="eye-safety-class-label eye-safety-class-3">Class 3B</span>: hazardous
              when the eye is exposed to a direct or reflected beam, as injury can occur faster than
              the blink reflex, can be hazardous to skin and ignite flammable materials under certain
              circumstances, intended for use in controlled environments by trained operators
            </li>
            <li>
              <span className="eye-safety-class-label eye-safety-class-4">Class 4</span>: hazardous
              to eye or skin when exposed to a direct, reflected or scattered beam, reflections from
              rough, non-shiny surfaces can still be hazardous. Represents a fire hazard, intended
              for use in controlled environments by trained operators
            </li>
          </ul>
        </div>
      }
    />
  );
}

export default defineSlide(SlideEyeSafety, {
  id: 'eye-safety',
  title: 'Safety',
});
