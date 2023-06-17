import Button from './eventoComponent/Button'
function Evento({numero} ){
    function meuEvento(){
        console.log(`Opa, fui ativado! ${numero}`) //observe o uso de crase
    }
    function primeiroEvento(){
        console.log("Evento do componente ativado") //observe o uso de crase
    }
    function segundoEvento(){
        console.log("Segundo evento ativado!")
    }
    return (
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={primeiroEvento} text="evento 1" />
            <Button event={segundoEvento} text="evento 2" />
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento