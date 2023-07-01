function Saudacao({nome}){
    function gerarSaudacao(algumNome){
        return `Olá, ${algumNome}, tudo bem?`
    }
    return (
        // if sem else (condição ternária)
        <> {nome && <p>{gerarSaudacao(nome)}</p>} </>
    )
}

export default Saudacao