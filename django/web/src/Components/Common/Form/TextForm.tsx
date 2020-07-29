import React from 'react';

import { TextField } from '@material-ui/core'

type Props = {
    /**
     * ラベル文字
     */
    label: string,
    /** 文字を入力された場合のイベントハンドラ */
    onChange: (value: string|number) => void
}

export const TextForm: React.FC<Props> = props => {
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
