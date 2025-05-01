import Foto from '../Foto/Foto';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import Languages from '../Languages/Languages';
import Skills from '../Skills/Skills';

import './LeftBlock.css';

function LeftBlock() {
    return (
      <div className="leftBlock"> 
            Левый блок
            <Foto />
            <About />
            <Contacts />
            <Languages />
            <Skills />
      </div>
    );
}

export default LeftBlock;
