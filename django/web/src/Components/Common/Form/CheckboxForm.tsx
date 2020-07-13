import React from 'react';
import { FormControlLabel } from '@material-ui/core';
import Check from './Check';

type Props = {
    label: string,
    checked?: boolean,
    disabled?: boolean,
    color?: 'primary' | 'secondary' | 'default',
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CheckboxForm: React.FC<Props> = props => {
    return (
        <FormControlLabel
            control={ <Check checked={ props.checked } disabled={ props.disabled } color={ props.color } onChange={ props.onChange } ></Check> }
            label={ props.label }
        ></FormControlLabel>
    )
}

export default CheckboxForm
