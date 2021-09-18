import facebooklogo from '../../images/footer/footer-sm-fb.png'
import instalogo from '../../images/footer/footer-sm-ig.png'
import linkdinlogo from '../../images/footer/footer-sm-li.png'
import './Home.css'

function Header () {

    return (
        <div className="headerContainer">
            <div className="he-container">
                <div>
                    <img src={facebooklogo} alt="facebook" className="img-logo" />
                    <img src={instalogo} alt="instagram" className="img-logo" />
                    <img src={linkdinlogo} alt="linkedin" className="img-logo" />
                </div>
                <div>
                    <span className="fo-white-text">
                        Ligue e faça seu orçamento:           
                    </span>
                    <span className="fo-yellow-text">
                        (11) 4634-6800      
                    </span>
                </div>
            </div>          
        </div>
    )

}

export default Header