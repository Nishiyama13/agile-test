import { useEffect, useState } from "react";
import { fetchProductsData } from '../../services/apiAgileProducts';
import { ProductsContainer } from "./styled"

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

};