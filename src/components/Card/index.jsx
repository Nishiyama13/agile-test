import React from "react";
import styled from "styled-components";

const Card = ({ product }) => {
    const {
        id,
        name,
        type,
        sku,
        status,
        short_description,
        description,
        period,
        subscriptions_count,
        created_at,
        updated_at
    } = product;

    return (
        <CardContainer>
            <div key={id} >
                <h1>{name}</h1>
                <h3>Type: {type}</h3>
                <h3>{short_description}</h3>
                <h4>{description}</h4>
                <h3>Sku: {sku}</h3>
                <h3>Status: {status} </h3>
                
                <h3>period: {period.start.date}</h3>
                <h3>subscriptions_count: {subscriptions_count}</h3>
                <h3>criado em: {created_at.date}</h3>
                <h3>Última atualização: {updated_at.date}</h3>
            </div>
        </CardContainer>
    );
}

const CardContainer = styled.div`
  border: 1px solid #000;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
`

export default Card;