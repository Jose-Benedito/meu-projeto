import { useState } from "react"

function Form(){
    function cadastrarUsuario(e){
        e.preventDefault() // Para a requisição do formulário ṕara exibir a mensagem
        console.log(name)
        console.log(password)
        console.log(`Cadastrou o Usuário ${name} e senha ${password}`) //obs: a crase
    }

    const [name, setName] = useState() //pega o valor do input no click(onChange)
  //  const [name, setName] = useState("Benedito") // para valor default
    const [password, setPassword] = useState()
    return (
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Name:</label>

                    <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Digite o seu nome"
                 //valor default   value={name}
                    onChange={(e) => setName(e.target.value)} //
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>

                    <input 
                    type="password" 
                    id="senha" 
                    name="senha" 
                    placeholder="Digite a sua senha"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>

        </div>
    )

}

export default Form