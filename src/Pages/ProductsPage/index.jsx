import ProductInfo from "../../components/ProductInfo";
import { ProductsPageContainer } from "./styled";

export default function Products() {
    return (
        <ProductsPageContainer>
            <h1>Produtos</h1>
            <ProductInfo />
        </ProductsPageContainer>
    );
}
