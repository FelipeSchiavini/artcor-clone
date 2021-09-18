import { NavLink } from 'react-router-dom'

//images
import logo from '../images/header/header-logo.png'

//components
import RainbowButton from './components/RainbowButton'
import Banner01 from "../routes/Home/Banner01"
import Carrousel1 from '../routes/Home/Carrousel1'
import Banner02 from '../routes/Home/Banner02'
import Carrousel2 from '../routes/Home/Carrousel2'
import FormContactUs from '../routes/Home/FormContactUs'
import Followus from '../routes/Home/Followus'
import Footer from '../routes/Home/Footer'
import Header from '../routes/Home/Header'

import './Navigation.css'

function Navigation () {
    return (
        <>
        <Header/>
        <div className="home-conteiner">
            <div className="content-container">
                <section className="nav-container">
                    <img src= { logo } alt = "logo" class="nav-logo"/>
                    <nav className="navigation-menu">
                        <NavLink className="link" activeClassName="selected-link" exact to="/home">Início</NavLink>
                        <NavLink className="link" activeClassName="selected-link"  exact to="/about-us">Sobre nós</NavLink>
                        <NavLink className="link" activeClassName="selected-link"  exact to="/products">Produtos</NavLink>
                        <NavLink className="link" activeClassName="selected-link"  exact to="/blog">Blog</NavLink>
                        <NavLink className="link" activeClassName="selected-link"  exact to="/contact">Contato</NavLink>
                    </nav>
                    <RainbowButton/>
                </section>
                <div className="body-container">
                    <Banner01/>
                    <Carrousel1/>
                    <Banner02/>
                    <Carrousel2/>
                    <FormContactUs/>
                    <Followus/>
                    <Footer/>
                </div>
            </div>
        </div>
    </>
    )
}

export default Navigation