import styled from "styled-components";
import Produtos from "./Pages/Produtos";
function App() {

  return (
    <AppCotainer>
      <Router>
        <Rotes>
          <Route path="/" element={<Produtos />}/>
        </Rotes>
      </Router>
    </AppCotainer>
  )
}

const AppCotainer = styled.div`
  display: flex;
  width: 100%;
`

export default App
