import { useEffect, useState } from "react";
import { fetchProductsData } from '../../services/apiAgileProducts';

export default function ProductInfo() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProductData () {
            try {
                const data = await fetchProductsData();
                console.log(data);
                setProducts(data);
    
            } catch(error) {
                console.log(error.message)
                return res.status(500).json({ error: 'Internal server error' });
            }
        }

        getProductData();
    }, []);

    return(
        <>

        </>
    )

}