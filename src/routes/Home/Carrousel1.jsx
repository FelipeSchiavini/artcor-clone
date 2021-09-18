import './Home.css'
import apron from "../../images/products/produtos-avental+bg.png"
import uniform from "../../images/products/produtos-camiseta+bg.png"
import band from "../../images/products/produtos-bandana+bg.png"
import doll from "../../images/products/produtos-pelucia+bg.png"
import arrow1 from "../../images/products/produtos-nav-esq.png"
import arrow2 from "../../images/products/produto-nav-dir.png"

function Carrousel1 () {
    return (
        <div className="carousel">
            <img src={arrow1} alt="" className="carousel1-arrow1"/>
            <img src={arrow2} alt="" className="carousel1-arrow2"/>
        <div className="carousel-item item1">
            <img className = "carousel-img" src={apron} alt="" />
            <div className="corousel-span">
                <span className="text-carousel">aventais</span>
                <span className="text-carousel">personalizados</span>
            </div>
        </div>
        <div className="carousel-item item2">
            <img className = "carousel-img" src={uniform} alt="" />
            <div className="corousel-span">
                <span className="text-carousel">uniformes escolares</span>
                <span className="text-carousel">e empresariais</span>
            </div>
        </div>
        <div className="carousel-item item3">
            <img className = "carousel-img" src={band} alt="" />
            <div className="corousel-span">
                <span className="text-carousel">bandanas</span>
                <span className="text-carousel">personalizados</span>
            </div>
        </div>
        <div className="carousel-item item4">
            <img className = "carousel-img" src={doll} alt="" />
            <div className="corousel-span">
                <span className="text-carousel">bichos de pelúcia</span>
                <span className="text-carousel">personalizados</span>
            </div>
        </div>
    </div>
    )
}

export default Carrousel1