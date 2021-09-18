import './Home.css'
import selo9001 from '../../images/footer/footer-selo-9001.png'
import selo14001 from '../../images/footer/footer-selo-14001.png'
import logo from '../../images/footer/footer-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

function Footer () {
    return (
        <section className="fo-section">
            <div className="fo-blue">
                <div className="fo-cln1 fo-cln">
                    <img src={logo} alt="logo" className="fo-logo"/>
                    <span className="fo-white-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores placeat ducimus ex neque, consequatur libero voluptate accusantium excepturi officiis est.</span>
                    <span className="fo-yellow-text"> politica de privacidade</span>
                </div>
                    <div className="fo-cln2 fo-cln">
                    <span className="fo-yellow-text"> Inicio</span>
                    <span className="fo-yellow-text"> Sobre nós</span>
                    <span className="fo-yellow-text"> Blog</span>
                    <span className="fo-yellow-text"> Contato</span>
                </div>
                <div className="fo-cln3 fo-cln">
                    <span className="fo-yellow-text">Produtos</span>
                    <span className="fo-white-text">Lorem ipsum dolor sit amet.</span>
                    <span className="fo-white-text">Lorem ipsum dolor sit amet consectetur.</span>
                    <span className="fo-white-text">Lorem, ipsum dolor.</span>
                    <span className="fo-white-text">Lorem ipsum dolor sit.</span>
                    <span className="fo-white-text">Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                    <span className="fo-white-text">Lorem ipsum dolor sit amet consectetur.</span>
                    <span className="fo-white-text">Lorem, ipsum dolor.</span>
                </div>
                <div className="fo-cln4 fo-cln">
                <span className="fo-white-text">Lorem, ipsum dolor.</span>
                    <span className="fo-white-text">Lorem ipsum dolor sit.</span>
                    <span className="fo-white-text">Lorem, ipsum dolor.</span>
                    <span className="fo-white-text">Lorem ipsum dolor sit.</span>
                    <span className="fo-white-text">Lorem ipsum dolor sit.</span>
                    <span className="fo-white-text">Lorem ipsum dolor sit.</span>
                    <span className="fo-white-text">Lorem, ipsum dolor.</span>
                    <span className="fo-white-text">Lorem, ipsum dolor.</span>
                </div>
            </div>
            <div className="fo-yellow">
                <div className = "fo-yellow-container">
                    <p className="fo-blue-text fo-text-yellow">Ligue e peça um orçamento</p>
                    <div className="logo-container">
                        <span className="fo-blue-text-bigger">
                            <FontAwesomeIcon icon={faPhoneAlt}/>
                            (11) 4634-6800
                        </span>
                        <div className="fo-selo">
                            <img src={selo9001} alt="selo9001" width="70px"/>
                            <img src={selo14001} alt="selo14001" width="70px"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer