import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { DragonsList } from '../../components/Dragons';
import Api from '../../services/Api';
import { Ordenar } from '../../utils/ordenar';
import { VerticalVerde, Container } from '../../styles/container';

const Dragons = () => {

    let history = useHistory();

    const [dragons, setDragons] = useState([]);
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
            const response = await Api.getDragons();
            if(response) setLoading(1);
            const resp = Ordenar(response.data);
            setDragons(resp);
        }
        fetchData();

    }, []);


    

    function remove(id){
        Api.removeDragons(id).then( async (res) => {
            const respo = await Api.getDragons();
            const resp = Ordenar(respo.data);
            setDragons(resp);
        })
    }

    return(
        <div className="centerLimit">

            <VerticalVerde/>

            <Container>

                <div className="botoes">
                    <Link to={`/dragons-post`}> <span>+ Criar</span> </Link>
                </div>

                {loading === 1 ?
                    dragons.map((res) => {
                        return(
                            <DragonsList
                                key={res.id}
                                id={res.id}
                                avatar={res.avatar}
                                name={res.name}
                                handleClick={() => remove(res.id)}
                            />
                        )
                    })
                :
                    <div className="loading">
                        Carregando...
                    </div>
                }
                
            </Container>
        </div>
    );
}

export default Dragons;