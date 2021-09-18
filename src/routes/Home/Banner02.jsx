import './Home.css'
import banner2 from  '../../images/others/sobre-imagem.png'

function Banner02 () {
    return (
        <div className="Conteiner-banner02">
            <div className="div-container-banner02">
                <div className="div-banner02 div-banner02-01">
                    <div className="postion-banner2-1">
                    <span className="title-banner2">referência no mercado</span>
                    <span className="text-banner2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nisi consectetur reiciendis, numquam in quod temporibus ab qui nulla ut dolore at deserunt totam, repellendus esse asperiores! Esse, nisi eaque.</span>
                    <span className="text-banner2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus beatae reiciendis harum tenetur quos iste eius molestias, nulla dignissimos odio nobis pariatur maxime doloremque quasi et sunt est aliquam delectus?</span>
                    </div>
                </div>
                <div className="div-banner02 div-banner02-02">
                    <span className="title2-banner2">nossos números</span>
                    <div className="banner2-article-cont1">
                        <span className="banner2-number">3</span>
                        <div className="banner2-text-c">
                            <span className="banner2-subtitle">décadas</span>
                            <span className="text2-banner2">de experiência</span>
                        </div>
                    </div>
                    <div className="banner2-article-cont2">
                        <span className="banner2-number">6</span>
                        <div className="banner2-text-c">
                            <span className="banner2-subtitle">mil m²</span>
                            <span className="text2-banner2">de área fabril</span>
                        </div>
                    </div>
                    <div className="banner2-article-cont3">
                        <span className="text2-banner2">Mais de</span>
                        <span className="banner2-number">100</span>
                        <div className="banner2-text-c">
                            <span className="banner2-subtitle">profissionais</span>
                        </div>
                    </div>
                    
                </div>
            </div>
            <img src={banner2} alt="" className="banner2"/>
            
        </div>
    )
}

export default Banner02