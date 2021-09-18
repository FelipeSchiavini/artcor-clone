import "./Card.css"

function CardCarrousel2 (props) {
    return(
        <section className="Carrousel2Card">
            <img src={props.img} alt="img-article" className="img-article"/>
            <p className="title-article ">LoLorem ipsum dolor sit amet</p>
            <p className="text-article">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, praesentium?</p>
            <button className="button-article"></button>
        </section>
    )
}

export default CardCarrousel2