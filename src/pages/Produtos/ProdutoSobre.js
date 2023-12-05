import { useContext, useEffect, useState } from "react"
import Card from "../../components/Card/Card"
import Header from "../../components/Header/Header"
import { ProductContext } from "../../contexts/productContext"
import useFetch from "../../hooks/useFetch"
import './ProdutoSobre.css'


function ProdutoSobre(){
    const [data, request] = useFetch("http://localhost:3001/products")
    const productContext = useContext(ProductContext)
    productContext.setProducts(data)

    useEffect(() => {request()}, [request])
    return (
        <>
            <Header title={"PRODUTOS"}/>
            
            <div className="card-container">
                {data && data.map((product) => 
                    <Card key={product.id} item={product} largura={'400px'} altura={'400px'}/>
                )}
            </div>
        </>
    )
}
 
export default ProdutoSobre