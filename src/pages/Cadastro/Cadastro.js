import Header from "../../components/Header/Header"
import Formulario from "../../components/Formulario/Formulario"
import './Cadastro.css'

function Cadastro(){
    return (
        <>
            <Header title={"CADASTRO"}/>

            <div className="container">
                <div className="half">
                    <img alt="imagem decorativa" src="https://05d3fc5fea96a39a97043203fb6d6e6e.cdn.bubble.io/f1668445765824x961759463375032800/Step3.svg"></img>
                </div>
                <div className="half">
                    <div className="half-content">
                        <Formulario/>
                    </div>
                </div>
            </div>

         

        </>
    )
}

export default Cadastro