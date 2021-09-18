import facebooklogo from '../../images/footer/footer-sm-fb.png'
import instalogo from '../../images/footer/footer-sm-ig.png'
import linkdinlogo from '../../images/footer/footer-sm-li.png'
import lineImg from '../../images/others/div.png'

function Followus () {
    return (
        <>
            <img src={lineImg} alt="" width="1000px" className="fu-line-img"/>
            <div className="fu-container">
                <div className="fu-div-input">
                    <label htmlFor="followus">inscreva-se para receber nossas novidades e promoções</label>
                    <input type="text" id="followus" />
                </div>
                <div className="fu-div-input">
                    Siga-nos nas redes sociais.
                    <div>
                        <img src={facebooklogo} alt="facebook" />
                        <img src={instalogo} alt="instagram" />
                        <img src={linkdinlogo} alt="linkedin" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Followus