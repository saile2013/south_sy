import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DetalhesCss } from './styled';

const DragonsDetails = ({id, avatar, name, createdAt, type}) => {

    useEffect(() => {
        if(createdAt){
            setDia(createdAt.substring(8,10))
            setMes(createdAt.substring(5,7))
            setAno(createdAt.substring(0,4))
            setHora(createdAt.substring(11,16))
        }
    }, [createdAt])

    const [dia, setDia] = useState('');
    const [mes, setMes] = useState('');
    const [ano, setAno] = useState('');
    const [hora, setHora] = useState('');


    return(
        <div>
            <DetalhesCss>
                <div className="botoes">
                    <Link to="/dragons"> Voltar</Link>
                </div>
                <div className="avatar" style={{backgroundImage: `url(${avatar})`}}></div>
                <div className="infor">
                    <h1>
                        <span>Nome <br/></span>
                        {name}
                    </h1>
                    <h1>
                        <span>Criado em <br/></span>
                        {`${dia}/${mes}/${ano} às ${hora}`}
                    </h1>
                    <h1>
                        <span>Tipo <br/></span>
                        {type}
                    </h1>
                </div>
            </DetalhesCss>
        </div>
    );
}

export default DragonsDetails;