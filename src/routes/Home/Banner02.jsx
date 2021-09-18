import './Home.css'
import banner2 from  '../../images/others/sobre-imagem.png'

function Banner02 () {
    return (
        <div className="Conteiner-banner02">
            <div className="div-container-banner02">
                <div className="div-banner02 div-banner02-01">text1</div>
                <div className="div-banner02 div-banner02-02">text2</div>
            </div>
            <img src={banner2} alt="" className="banner2"/>
            
        </div>
    )
}

export default Banner02