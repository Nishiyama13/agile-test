import styled from "styled-components";
import Produtos from "./Pages/Produtos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {

  return (
    <AppCotainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Produtos />}/>
        </Routes>
      </BrowserRouter>
    </AppCotainer>
  )
}

const AppCotainer = styled.div`
  display: flex;
  width: 100%;
`

export default App
