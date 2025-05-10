import './Foto.css'

import foto from '../images/foto.png'

//Фото
function Foto () {
    return (
        <div className='fOto'>
          
            <img src={foto} alt='Фото' />
        </div>

    );
}

export default Foto;