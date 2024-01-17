import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.688);
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  height: 450px;

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
    max-width: 250px;
  }

  @media (max-width: 650px) {
    align-items: center;
    width: auto;
    height: auto;
  }
`