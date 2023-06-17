function Form(){
    function cadastrarUsuario(e){
        e.preventDefault() // Para a requisição do formulário ṕara exibir a mensagem
        console.log('Cadastrou o Usuário!')
    }
    return (
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>

        </div>
    )

}

export default Form