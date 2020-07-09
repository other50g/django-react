import React from 'react';

import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

type Option = {
    value: string,
    text: string
}

type Props = {
    label: string,
    options?: Array<Option>
}

const RadioGroupForm: React.FC<Props> = props => {
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{ props.label }</FormLabel>
            <RadioGroup>{ props.children }</RadioGroup>
        </FormControl>
    )
}

export default RadioGroupForm
