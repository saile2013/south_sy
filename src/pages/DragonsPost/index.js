import React, { useState, useEffect } from 'react';
import Inputs from '../../components/Form';
import { useHistory } from 'react-router-dom';
import Api from '../../services/Api';

import { VerticalVerde } from '../../styles/container';
import { Container } from './styled';


const DragonsPost = () => {

    const [avatar, setAvatar] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [validar, setValidar] = useState("");
    const [entrar, setEntrar] = useState(0);
    const style = { backgroundColor: '#CCC', color: '#333' }

    let history = useHistory();

    useEffect(() => {
        if(entrar === 1)
            history.replace("/");
            
    }, [entrar]);


    useEffect(() => {
        Api.verificaLogin(localStorage.token).then((res)=>{
            if(!res.data[0])
                setEntrar(1);
        });

        if(validar !== ''){
            setTimeout(function(){
                history.replace("/dragons");
            }, 1000);
        }
    }, [validar, history]);

    function Voltar (e){
        e.preventDefault();
        history.replace("/dragons");
    }

    function Enviar (e){
        e.preventDefault();

        const data = {
            "name": name,
            "type": type,
            "avatar": avatar,
        }

        Api.postsDragons(data).then((res)=>{
            setAvatar("");
            setName("");
            setType("");
            setValidar("Enviado com sucesso!");            
        });
    }


    return(
        <div className="centerLimit">

            <VerticalVerde/>

            <Container>

                <form onSubmit={Enviar}>
                
                    <Inputs.Text
                        type="text"
                        placeholder="Url da Imagem"
                        value={avatar}
                        required={true}
                        handleOnChange={(e)=>setAvatar(e.target.value)}
                    />

                    <Inputs.Text
                        type="text"
                        placeholder="Name"
                        value={name}
                        required={true}
                        handleOnChange={(e)=>setName(e.target.value)}
                    />

                    <Inputs.Text
                        type="text"
                        placeholder="Tipo"
                        value={type}
                        required={true}
                        handleOnChange={(e) => setType(e.target.value)}
                    />

                    <Inputs.Button 
                        type="submit"
                        value="Criar Dragon"
                    />

                    <Inputs.Button 
                        type="submit"
                        value="Cancelar"
                        style={style}
                        handleOnChange={(e)=>Voltar(e)}
                    />

                    <div className="sucesso">
                        {validar}
                    </div>

                </form>
            </Container>
        </div>
    );
}

export default DragonsPost;