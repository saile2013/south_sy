import { FormCtn } from './styled';

const Button = ({ type, value, handleOnChange, style }) => {   

    return(
        <FormCtn>
            <button type={type} onClick={handleOnChange} style={style}>
                {value}
            </button>
        </FormCtn>
    )
}

export default Button