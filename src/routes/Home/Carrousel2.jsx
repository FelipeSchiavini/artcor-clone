import './Home.css'
import CardCarrousel2 from './componets/Card-Carrosel2'
import img1 from '../../images/article/artigo-img1.png'
import img2 from '../../images/article/artigo-img2.png'
import img3 from '../../images/article/artigo-img3.png'
import arrow1 from '../../images/article/artigos-nav-esq.png'
import arrow2 from '../../images/article/artigos-nav-dir.png'

function Carrousel2 () {
    return (
        <section className="div-carousel2">
            <p>artigos recentes</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iure corrupti totam libero qui m</p>
            <div className="carousel2">
                <img src={arrow1} alt="" className="arrow" />
                <CardCarrousel2 img = {img1}/>
                <CardCarrousel2 img = {img2}/>
                <CardCarrousel2 img = {img3}/>
                <img src={arrow2} alt="" className="arrow" />
            </div>
        </section>
    )
}

export default Carrousel2