import './Card.css'
import { Link } from 'react-router-dom'

function Card({item, largura, altura, descricao = false}){

    const estiloFoto = {
        width: largura,
        height: `calc(${altura} - 15vh)`,
        backgroundImage: `url(${item.photo_url})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    const tamanhoCard = {
        width: largura,
        height: altura,
        margin: '30px'
    }

    return (
        <>
            <div style={tamanhoCard}>
                <Link to={`/produto/${item.id}`}>
                    <div className='imagem' style={estiloFoto}></div>
                    <div className="info">
                        <p style={{paddingTop:'5px', margin:'0px', fontSize:'25px'}}>{item.name}</p>
                        <p>R$ {item.price}</p>
                        { descricao && <p>{item.description}</p>}
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Card