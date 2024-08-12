import Botao from "./Botao";

function App () {
  return ( // o return retorna apenas 1 objeto, então se colocar varios objetos dentro de uma div e irá funcionar
    <div className="App"> 
      <h1>Teste</h1>
      <Botao/>
      <Botao/>
      <Botao/>
    </div>
  )
}

export default App;