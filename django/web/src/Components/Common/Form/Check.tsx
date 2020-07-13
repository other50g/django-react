import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

type Props = {
    checked?: boolean,
    disabled?: boolean,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    color?: 'primary' | 'secondary' | 'default'
}

const Check: React.FC<Props> = props => {
    const disabled = props.disabled == undefined ? false : props.disabled;
    const checked = props.checked == undefined ? false : props.checked;
    const color = props.color == undefined ? 'primary' : props.color;
    return (
        <Checkbox
            disabled={ disabled }
            checked={ checked }
            color={ color }
            onChange={ props.onChange }
        ></Checkbox>
    )
}

export default Check
