import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

type Option = {
    value: string|number,
    text: string
}

type Props = {
    label: string,
    value?: string|number,
    options?: Array<Option>,
    onChange: (value: string|number) => void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            minWidth: 120,
        }
    })
);

const SelectForm: React.FC<Props> = props => {
    const classes = useStyles();
    const select = (e: React.ChangeEvent<{ name?: string | undefined, value: unknown }>) => {
        const value = e.target.value;
        if (typeof value === 'string' || typeof value === 'number') {
            props.onChange(value);
        }
    }
    return (
        <FormControl className={ classes.formControl }>
            <InputLabel>{ props.label }</InputLabel>
            <Select
                value={ props.value }
                onChange={ select }
            >
                { props.options?.map((option, index) => {
                    return <MenuItem value={ option.value } key={ index }>{ option.text }</MenuItem>
                }) }
            </Select>
        </FormControl>
    )
}

export default SelectForm
