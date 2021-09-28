import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import validator from 'validator';
import Inputs from '../../components/Form';
import Api from '../../services/Api';
import { VerticalVerde, Container } from '../../styles/container';

const Logar = () => {

    let history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validar, setValidar] = useState('');
    const [logado, setLogado] = useState('');

    useEffect(() => {
        if(logado === 1){
            history.replace("/dragons");
        }
    }, [logado, history]);

    function validarEmail (e) {
        const email = e.target.value;
        const emailValid = validator.isEmail(email);
        if(emailValid === false){
            setValidar('¡email inválido!');
        }else{
            setValidar('');
        }

        setEmail(e.target.value);
    }

    function Enviar (e){

        Api.getLogin(email, password).then((res)=>{
            console.log(res.data[0].token);
            if(res.data[0].token){
                localStorage.setItem("token", res.data[0].token);
                setLogado(1);
            }else{
                setValidar(`¡${res.data.statusText}!`);
            }
        }).catch((error)=>{
            setValidar(`¡${error}!`);
        });

        e.preventDefault();
    }


    return(
        <div className="centerLimit">

            <VerticalVerde/>

            <Container>
                <form onSubmit={Enviar}>
                
                    <Inputs.Text
                        type="Text"
                        placeholder="E-mail"
                        value={email}
                        required={true}
                        handleOnChange={(e)=>validarEmail(e)}
                    />

                    <Inputs.Text
                        type="password"
                        placeholder="Senha"
                        value={password}
                        required={true}
                        handleOnChange={(e) => setPassword(e.target.value)}
                    />

                    <Inputs.Button 
                        type="submit"
                        value="Entrar"
                    />

                    <div className="sucesso" style={{marginTop: '130px'}}>
                        {validar}
                    </div>

                </form>
            </Container>
        </div>
    );
}

export default Logar;