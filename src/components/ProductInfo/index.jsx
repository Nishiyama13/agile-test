import { useEffect, useState } from "react";

export default function ProductInfo() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProductData () {
            try {
                const apiProducURL = `https://private-anon-0ab1076ae3-produto3.apiary-mock.com/api/products`;
                const res = await fetch(apiProducURL)
                const data = await res.json();
                console.log(data);
                setProducts(data);
    
            } catch(e) {
                console.log(e.message)
            }
        }

        getProductData();
    }, []);

    return(
        <>

        </>
    )

}