import React from 'react';
import { FormControlLabel } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';

type Props = {
    label: string,
    value?: string | number,
    disabled?: boolean,
    color?: 'primary' | 'secondary' | 'default',
}

const RadioForm: React.FC<Props> = props => {
    const color = props.color == undefined ? 'primary' : props.color;
    return (
        <FormControlLabel
            value={ props.value }
            control={ <Radio color={ color } /> }
            label={ props.label }
        ></FormControlLabel>
    )
}

export default RadioForm
