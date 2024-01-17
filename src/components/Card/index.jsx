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
                <h2>{name}</h2>
                <h3>Tipo: {type}</h3>
                <h3>{short_description}</h3>
                <h4>{description}</h4>
                <h3>Sku: {sku}</h3>
                <h3>Status: {status} </h3>
                
                <h3>period: {formattedStartDate}</h3>
                <h3>Inscritos: {subscriptions_count}</h3>
                <h3>Criado em: {formattedCreatedAtDate}</h3>
                <h3>Última atualização: {formattedUpdatedAtDate}</h3>
            </div>
        </CardContainer>
    );
}

const CardContainer = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.688);
  padding: 10px;
  margin: 10px;
  border-radius: 8px;

  h2 {
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 30px;
  }

  h3 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  h4 {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-style: italic;
    font-size: 13px;
  }
`

export default Card;