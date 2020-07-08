import React from 'react';

import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import 'date-fns';
import { ParsableDate } from '@material-ui/pickers/constants/prop-types';
import DateFnsUtils from '@date-io/date-fns';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

type Props = {
    label: string,
    value?: string,
    onChange: (value: string) => void
}

const DatepickerForm: React.FC<Props> = props => {
    const picked = (date: MaterialUiPickersDate, value: string | null | undefined) => {
        if (date == undefined || date == null) {
            return;
        }
        props.onChange(date.toString());
    }
    /**
     * 日付型でパース
     */
    const date: ParsableDate = () => {
        console.log(props.value);
        if (props.value == undefined) {
            return new Date();
        }
        return new Date(props.value);
    }
    return (
        <MuiPickersUtilsProvider utils={ DateFnsUtils }>
            <KeyboardDatePicker
                disableToolbar
                label={ props.label }
                variant="inline"
                onChange={ picked }
                value={ date }
            ></KeyboardDatePicker>
        </MuiPickersUtilsProvider>
    )
}

export default DatepickerForm
