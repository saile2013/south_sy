import React from 'react';
import { FormCtn } from './styled';

const Text = ({ type, placeholder, value, required, handleOnChange }) => {   

    return(
        <FormCtn>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                required={required ? true : false}
                onChange={handleOnChange}
            />
        </FormCtn>
    )

}

export default Text