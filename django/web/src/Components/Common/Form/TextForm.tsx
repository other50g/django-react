import React from 'react';

import { TextField } from '@material-ui/core'

type Props = {
    label: string,
    onChange: (value: string|number) => void
}

const TextForm: React.FC<Props> = props => {
    const input = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const value = e.target.value;
        props.onChange(value);
    }
    return (
        <TextField
            label={ props.label }
            onChange={ input }
        ></TextField>
    )
}

export default TextForm
