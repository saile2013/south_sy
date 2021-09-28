import { Link } from 'react-router-dom';
import { ListViews } from './styled';


const DragonsList = ({id, avatar, name, handleClick}) => {

    return(
        <div>
            <ListViews key={id}>
                <Link to={`/dragons/${id}`}>
                    <div className="avatar" style={{backgroundImage: `url(${avatar})`}}></div>
                    <h1>{name}</h1>
                </Link>
                <div className="exc">
                <Link to={`/dragons-put/${id}`}>Editar</Link> | <span onClick={handleClick}>Excluir</span>
                </div>                        
            </ListViews>
        </div>
    );
}

export default DragonsList;