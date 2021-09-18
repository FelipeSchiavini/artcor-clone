import divImage from "../../images/others/div.png"
import './Home.css'

function Banner01(){
    return (
        <div className ="banner01-container">
        <img src={divImage} alt="" width= "100%" className="fillet"/>
        
        <div className="background-image1">
            <div className="text-banner1">
                <span className="banner1-t1">fortaleça</span>
                <span className="banner1-t2">a presença de sua marca com</span>
                <span className="banner1-t3">artigos</span>
                <span className="banner1-t4">personalizados</span>
                <button className="banner1-button"></button>
            </div>
        </div>
        
        </div>
    )
}

export default Banner01