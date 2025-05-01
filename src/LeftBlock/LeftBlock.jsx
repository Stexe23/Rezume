import Foto from '../Foto/Foto';
import About from '../About/About'

import './LeftBlock.css'

function LeftBlock() {
    return (
      <div className="leftBlock">
    
    
            Левый блок
            <Foto />
            <About />
          
      </div>
    );
}

export default LeftBlock;
