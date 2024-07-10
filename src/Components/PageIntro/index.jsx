import './login.css'
import logoname from '../../Photos/logoNome.png'
import { useState } from 'react'

export default function Login(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function acesso(){
        if(email === 'admin@.com' && senha === '12345'){
            alert('Acesso Aprovado')
            setEmail('')
            setSenha('')

        }else{
            alert('Acesso negado')
            setEmail('')
            setSenha('')
        }
    }

    return(
        <div className='container-login'>
            <img src={logoname} alt=''  className='animate__animated animate__fadeIn animate__slow'/>

            <div className='box-login animate__animated animate__fadeInUpBig animate__slow'>
                <input type='text'
                 placeholder='Digite seu email'
                 value={email}
                 onChange={(e)=> setEmail(e.target.value)}
                 />

                <input type='password'
                 placeholder='Digite sua senha'
                 value={senha}
                 onChange={(e)=> setSenha(e.target.value)}
                  />

                <button onClick={acesso}>Acessar</button>
            </div>

            <p className='animate__animated animate__fadeInUpBig animate__slow' value=''>Pedir acesso</p>     
        </div>
    )
}