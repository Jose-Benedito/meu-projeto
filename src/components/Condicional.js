import {useState} from 'react'


function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(event){
        event.preventDefault()
        console.log('Testando')
        setUserEmail(email)
        console.log(userEmail)
    }
    function limparEmail(){
        setUserEmail('')
    }

    return (
        <div>
            <h2> Cadastre oseu Email</h2>
            <form>
                <input type='email' 
                placeholder='Digite seu email...'
                onChange={(e) => setEmail(e.target.value)}
                />
                <button type='submit' onClick={enviarEmail}>
                    Enviar 
                </button>
                
                {userEmail &&(
                    <div>
                        <p> O email do usuário é {userEmail}</p>
                        <button onClick={limparEmail}>Limpar</button>
                    </div>
                )}
            </form>
        </div>
    )

}

export default Condicional