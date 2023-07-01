
import './App.css';
import HelloWorld  from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';

function App() {
  const name = 'Maria'
  const url = 'https://via.placeholder.com/150'
  const dono = 'Benedito'

  // lista
  const meusintens = ['React', 'Vue', 'angular']

  function sum(a,b){
    return a*b
  }
  return (
    <div className="App">
    <h1>Olá react!</h1>
    <p>Olá meu caro {dono} !</p>
    <p>A multiplicação de 5 e 68 é {sum(5,68)}</p>
    <img src={url} alt="imagem teste"/>

    <HelloWorld/>
    <SayMyName nome="Benedito" />
    <SayMyName nome="José" />
    <SayMyName nome={name} />

    <Pessoa 
      nome="Rodrigo"
      idade="28"
      profissao="Programador"
      foto="https://via.placeholder.com/150"/>

      <List />
      <div>
        <h1>Testando Eventos</h1>
        <Evento numero="122"/>
        <Condicional />
        <Form />
      </div>
      <h1>Renderezação de listas</h1>
      <OutraLista itens= {meusintens} />
      <OutraLista itens= {[]} />
    </div>
   
 
  );
}

export default App;
