import Search from '../Search/Search'
import logoSrc from './logo.svg'
import logoSrc2 from './logo2.svg'
import './style.css'

export default function Header({setSearchQuery, user}) {
    return (
        <header>
            <div className='container'>
                <div className='header__wrap'>
                    <div className='logo'>
                        <a href="/"><img src={logoSrc} alt="logo" className='logo1'></img></a>
                        <a href="/"><img src={logoSrc2} alt="logo" className='logo2'></img></a>
                    </div>
                    <Search setSearchQuery={setSearchQuery}/>
                    <div className='user-info'>
                        <img src={user.avatar}></img>
                        <p>{user.name}</p>
                    </div>
                </div>
            </div>
        </header>
    )
}