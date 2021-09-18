import banner3 from '../../images/others/contato-bg.png'
import './Home.css'

function FormContactUs () {
    return(
    <div className="conteiner-contactus">
        <img src={banner3} alt="" className="img-contactus" width="1000px"/>
        <section className="section-contactus">
            <p>fale conosco</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, illum.</p>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <textarea/>
            <div className="div-contactus-form">
                <input type="checkbox" />
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, nulla pariatur. Autem aperiam similique explicabo?</span>
                <button className="buttonEnviar"></button> 
            </div>
        </section>
    </div>
    )
}

export default FormContactUs