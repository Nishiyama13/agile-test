import styled from "styled-components";

export const ProductsContainer = styled.div`
    border: 1px solid #000;
    padding: 10px;
    margin: 10px;
    border-radius: 8px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 650px) {
        align-items: center;
    }
`