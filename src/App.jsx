import styled from "styled-components";
import Products from "./Pages/ProductsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />}/>
        </Routes>
      </BrowserRouter>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  display: flex;
  width: 100%;
`

export default App
