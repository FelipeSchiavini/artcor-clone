import banner3 from '../../images/others/contato-bg.png'
import './Home.css'

function FormContactUs () {
    return(
    <div className="conteiner-contactus">
        <img src={banner3} alt="" className="img-contactus" width="1000px"/>
        <section className="section-contacts">
            <p className="fcu-tittle">fale conosco</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates expedita officiis sed omnis!</p>
            <div className="fcu-input-container">
                <input type="text" className="fcu-input" placeholder="Nome"/>
                <input type="text" className="fcu-input" placeholder="e-mail"/>
                <input type="text" className="fcu-input" placeholder="telefone"/>
                <textarea className="fcu-input" placeholder="text area"/>
                <div className="div-contactus-form">
                    <input type="checkbox" className="fcu-input"/>
                    <div className="check-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, eum! Suscipit, similique! Doloribus, non <span className="fo-blue-text">consectetur!</span>
                    </div>
                    <button className="buttonEnviar"></button> 
                </div>
            </div>
        </section>
    </div>
    )
}

export default FormContactUs