import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { DragonsDetails } from '../../components/Dragons/index';
import Api from '../../services/Api';
import { VerticalVerde, Container } from '../../styles/container';

const PerfilDragons = (params) => {

    let history = useHistory();

    const [avatar, setAvatar] = useState();
    const [name, setName] = useState();
    const [createdAt, setCreatedAt] = useState();
    const [type, setType] = useState();
    const [loading, setLoading] = useState(0);
    const [entrar, setEntrar] = useState(0);
    
    useEffect(() => {
        if(entrar === 1)
            history.replace("/");
            
    }, [entrar]);

    useEffect(() => {

        Api.verificaLogin(localStorage.token).then((res)=>{
            if(!res.data[0])
                setEntrar(1);
        });
        
        async function fetchData() {
            const response = await Api.dtlDragons(params.match.params.id);
            if(response) setLoading(1);
            setAvatar(response.data.avatar);
            setName(response.data.name);
            setCreatedAt(response.data.createdAt);
            setType(response.data.type);
        }
        fetchData();
    }, [params.match.params.id]);

    
    return(
        <div className="centerLimit">

            <VerticalVerde/>

            <Container>

                {loading === 1 ?
                    <DragonsDetails
                        id={params.match.params.id}
                        avatar={avatar}
                        name={name}
                        createdAt={createdAt}
                        type={type}
                    />
                :
                    <div className="loading">
                        Carregando...
                    </div>
                }
                
            </Container>
        </div>
    );
}

export default PerfilDragons;