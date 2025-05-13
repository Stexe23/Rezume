import WorkExperince from '../WorkExperience/WorkExperience'
import ProfField from '../ProfField/ProfField';
import Education from '../Education/Education';
import Courses from '../Courses/Courses';

import './RightBlock.css'

function RightBlock() {
    return (
      <div className="rightBlock">
            <ProfField />
            <WorkExperince/>
            <Education />
            <Courses />          
      </div>
    );
}

export default RightBlock;
