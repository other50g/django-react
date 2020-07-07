import React from 'react';

import { TextField } from '@material-ui/core'

interface Props {
    label: string,
    onChange: (value: string|number) => void
}

class TextForm extends React.Component<Props> {
    render() {
        return (
            <TextField
                label={ this.props.label }
                onChange={ this.input }
            ></TextField>
        )
    }
    input = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        this.props.onChange(e.target.value);
    }
}

export default TextForm
