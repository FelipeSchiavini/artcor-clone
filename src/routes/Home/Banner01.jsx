import divImage from "../../images/others/div.png"

function Banner01(){
    return (
        <>
        <img src={divImage} alt="" width= "100%"/>
        
        <div className="background-image">
            <div className="text-banner1">
                <p className="banner1-t1">fortaleça</p>
                <p className="banner1-t2">a presença de sua marca com</p>
                <p className="banner1-t3">artigos</p>
                <p className="banner1-t4">personalizados</p>
                <button>images</button>
            </div>
        </div>
        
        </>
    )
}

export default Banner01