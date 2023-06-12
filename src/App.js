
import './App.css';
import HelloWorld  from './components/HelloWorld';

function App() {
  const name = 'Benedito'
  const url = 'https://via.placeholder.com/150'

  function sum(a,b){
    return a*b
  }
  return (
    <div className="App">
    <h1>Olá react!</h1>
    <p>Olá meu caro {name} !</p>
    <p>A multiplicação de 5 e 68 é {sum(5,68)}</p>
    <img src={url} alt="imagem teste"/>
    <HelloWorld/>
    </div>
  );
}

export default App;
