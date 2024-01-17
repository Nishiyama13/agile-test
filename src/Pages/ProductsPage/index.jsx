import ProductInfo from "../../components/ProductInfo";
import styled from "styled-components";

export default function Products() {
    return (
        <ProductsContainer>
            <h1>Produtos</h1>
            <ProductInfo />
        </ProductsContainer>
    );
}
const ProductsContainer = styled.div`
    h1 {
        text-align: center;
        font-family: "Courgette", cursive;
        font-weight: 400;
        font-style: normal;
    }
`