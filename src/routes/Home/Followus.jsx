import facebooklogo from '../../images/footer/footer-sm-fb.png'
import instalogo from '../../images/footer/footer-sm-ig.png'
import linkdinlogo from '../../images/footer/footer-sm-li.png'
import lineImg from '../../images/others/div.png'

function Followus () {
    return (
        <div className="fu-container-of">
            <img src={lineImg} alt="" width="1000px" className="fillet2"/>
            <div className="fu-container">
                <div className="fu-div-input">
                    <label htmlFor="followus" className="fu-text">inscreva-se para receber nossas novidades e promoções</label>
                    <div className="fu-input-container">
                    <input type="text" id="followus" />
                    <button className="fu-button"/>
                    </div>
                </div>
                <div className="fu-div-input ">
                    <span className="fu-text">Siga-nos nas redes sociais.</span>
                    <div>
                        <img src={facebooklogo} alt="facebook" className="img-logo" />
                        <img src={instalogo} alt="instagram" className="img-logo"/>
                        <img src={linkdinlogo} alt="linkedin" className="img-logo"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Followus