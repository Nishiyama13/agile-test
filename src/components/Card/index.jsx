import React from "react";
import styled from "styled-components";
import formatDate from "../../helpers/formatDate"

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

    const formattedStartDate = formatDate(period.start.date);
    const formattedCreatedAtDate = formatDate(created_at.date);
    const formattedUpdatedAtDate = formatDate(updated_at.date);

    return (
        <CardContainer>
            <div key={id} >
                <h1>{name}</h1>
                <h3>Type: {type}</h3>
                <h3>{short_description}</h3>
                <h4>{description}</h4>
                <h3>Sku: {sku}</h3>
                <h3>Status: {status} </h3>
                
                <h3>period: {formattedStartDate}</h3>
                <h3>subscriptions_count: {subscriptions_count}</h3>
                <h3>criado em: {formattedCreatedAtDate}</h3>
                <h3>Última atualização: {formattedUpdatedAtDate}</h3>
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