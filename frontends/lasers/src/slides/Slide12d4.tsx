import { ColumnSlide } from '../components/layouts/ColumnSlide';
import { defineSlide } from './defineSlide';
import { useLaserTool } from '../context/LaserToolContext';

function Slide12d4(): JSX.Element {
  const {tool} = useLaserTool();
  return (
    <ColumnSlide
      left={
        <div>
          <p>The XTool has a lid interlock that prevents the lid from being opened while the machine is running.</p>
          <p>If the lid interlock is disabled, the machine will run without the lid interlock.</p>
          <p>This turns the machine from a class 1 laser to a class 4 laser.</p>
        </div>
      }
      right={
        <div>
          <ul>
            <li>NEVER leave the laser cutter unattended.</li>
            <li>NEVER put chlorine in the machine.</li>
            {tool === "xtool" && (
              <li>NEVER disable the lid interlock.</li>
            )}
          </ul>
        </div>
      }
    />
  );
}

export default defineSlide(Slide12d4, {
  id: 'safety-chlorine',
  title: 'Safety',
  whenTool: 'xtool',
});
