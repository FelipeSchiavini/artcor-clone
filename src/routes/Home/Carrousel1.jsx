import apron from "../../images/products/produtos-avental+bg.png"
import uniform from "../../images/products/produtos-camiseta+bg.png"
import band from "../../images/products/produtos-bandana+bg.png"
import doll from "../../images/products/produtos-pelucia+bg.png"
import './Home.css'

function Carrousel1 () {
    return (
        <div className="carousel">
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
                <span className="text-carousel">aventais</span>
                <span className="text-carousel">personalizados</span>
            </div>
        </div>
        <div className="carousel-item item3">
            <img className = "carousel-img" src={band} alt="" />
            <div className="corousel-span">
                <span className="text-carousel">aventais</span>
                <span className="text-carousel">personalizados</span>
            </div>
        </div>
        <div className="carousel-item item4">
            <img className = "carousel-img" src={doll} alt="" />
            <div className="corousel-span">
                <span className="text-carousel">aventais</span>
                <span className="text-carousel">personalizados</span>
            </div>
        </div>
    </div>
    )
}

export default Carrousel1