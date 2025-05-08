import './Contacts.css';


import tg from './icons8-telegram-24.svg';
import tph from './icons8-telephone-24.png';
import wa from './icons8-whatsapp-24.png';
import ml from './icons8-mail-24.png'



//Контакты
function Contacts () {
    return (
        <div className="cOntacts">
            <h2>Контакты</h2>            
            <img src={tph} alt="+79123885966"/> <a href='tel:+79123885966'>+79123885966</a> <p />
            <img src={tg} alt='Телеграмм'/> <a href="https://t.me/+79123885966" target="_blank">Telegram</a><p />
            <img src={wa} alt='WatsApp'/> <a href="https://api.whatsapp.com/send/?phone=79123885966" target="_blank"> WhatsApp</a><p />
            <p><img src={ml} alt='Почта' />  stexe@rambler.ru</p>
        </div>

    );
}

export default Contacts;