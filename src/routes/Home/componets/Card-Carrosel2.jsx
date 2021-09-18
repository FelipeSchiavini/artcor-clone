import "./Card.css"

function CardCarrousel2 (props) {
    return(
        <section className="Carrousel2Card">
            <img src={props.img} alt="img-article" className="img-article"/>
            <p className="title-article">Lorem ipsum dolor sit</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className="button-article"></button>
        </section>
    )
}

export default CardCarrousel2