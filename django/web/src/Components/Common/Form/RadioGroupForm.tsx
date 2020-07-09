import React from 'react';

import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from './Radio';

type Option = {
    value: string|number,
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
            <RadioGroup>
                { props.options?.map((option) => {
                    return <Radio value={ option.value } label={ option.text }></Radio>
                }) }
            </RadioGroup>
        </FormControl>
    )
}

export default RadioGroupForm
