import { Link } from 'react-router-dom'
import './Header.css'

const Header = ({title}) => {
   
    return (
        <>
        <div className="fundo">
            <div className='half'>
                <div className="half-content">
                    <p>{title}</p>
                </div>
            </div>
            <div className='half'>
                <div className="half-content">
                    <nav className='navegador'>
                        <Link to={"/"}>HOME</Link>
                        <Link to={"/produtoSobre"}>PRODUTOS</Link>
                        <Link to={"/cadastro"}>CADASTRO</Link>
                    </nav>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header