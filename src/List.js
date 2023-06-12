import Item from "./components/Item"


function List(){
    return(
      <>
      <h1>Minha lista</h1>
      <ul>
        <Item marca="Ferrari"/>
        <Item marca="Fiat" />
        <Item marca="Rennault" />
      </ul>
      </>  
    )
}

export default List