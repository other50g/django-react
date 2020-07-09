import React from 'react';
import { FormControlLabel } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';

type Props = {
    label: string,
    value?: string | number,
    disabled?: boolean,
}

const RadioForm: React.FC<Props> = props => {
    return (
        <FormControlLabel
            value={ props.value }
            control={ <Radio /> }
            label={ props.label }
        ></FormControlLabel>
    )
}

export default RadioForm
