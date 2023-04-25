import './style.css'
import {ReactComponent as Logo} from '../Header/logo.svg'
import {ReactComponent as Tg} from './logo-telegram.svg'
import {ReactComponent as Wa} from './logo-whatsapp.svg'
import {ReactComponent as V} from './logo-viber.svg'
import {ReactComponent as Inst} from './logo-instagram.svg'
import {ReactComponent as Vk} from './logo-vk.svg'

export default function Footer(){
    return (
        <footer>
            <div className="container">
                <div className="footer__wraper">
                    <div className='footer__logo'>
                        <Logo />
                        <p>© «Интернет-магазин DogFood.ru»</p>
                    </div>
                    <div className='footer__nav'>
                        <a href="#">Каталог</a>
                        <a href="#">Акции</a>
                        <a href="#">Новости</a>
                        <a href="#">Отзывы</a>
                    </div>
                    <div className='footer__nav'>
                        <a href="#">Оплата и доставка</a>
                        <a href="#">Часто спрашивают</a>
                        <a href="#">Обратная связь</a>
                        <a href="#">Контакты</a>
                    </div>
                    <div className='footer__contacts'>
                        <h3>Мы на связи</h3>
                        <div className='email'>
                            <h3>8 (999) 00-00-00</h3>
                            <p>dogfood.ru@gmail.com</p>
                        </div>
                        <div className='socials'>
                            <Tg />
                            <Wa />
                            <V />
                            <Inst />
                            <Vk />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}