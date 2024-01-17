import { useEffect, useState } from "react";
import { fetchProductsData } from '../../services/apiAgileProducts';
import styled from "styled-components";
import Card from "../Card";

export default function ProductInfo() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getProductData () {
            try {
                const response = await fetchProductsData();
                console.log(response);
                setProducts(response.data);
                setIsLoading(false);
    
            } catch(error) {
                console.log(error.message)
                return res.status(500).json({ error: 'Internal server error' });
            } 
        }

        getProductData();
    }, []);

    console.log(products);
    console.log(isLoading);

    return(
        <ProductsContainer>
            {isLoading ? (
                <div>Carregando...</div>
            ) : (
                products.map((product) => (
                    <Card key={product.id} product={product.attributes}/>
                ))
            )}
        </ ProductsContainer>
    );

}

const ProductsContainer = styled.div`
  border: 1px solid #000;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;

  display: flex;
  flex-wrap: wrap;
`