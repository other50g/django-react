import React from 'react';

import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import 'date-fns';
import dateformat from 'date-fns/format';
import isDateValid from 'date-fns/isValid';
import ja from 'date-fns/locale/ja';
import { ParsableDate } from '@material-ui/pickers/constants/prop-types';
import DateFnsUtils from '@date-io/date-fns';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

type Props = {
    label: string,
    value?: string,
    format?: string | 'yyyy/MM/dd',
    onChange: (value: string) => void
}

const DatepickerForm: React.FC<Props> = props => {
    /**
     * フォーマットの定義
     */
    const format = props.format == undefined ? 'yyyy/MM/dd' : props.format;
    const picked = (date: MaterialUiPickersDate, value: string | null | undefined) => {
        if (date == undefined || date == null) {
            return;
        }
        if (isDateValid(date)) {
            props.onChange(dateformat(date, 'yyyy/MM/dd'));
        }
    }
    /**
     * 日付型でパース
     */
    const date: ParsableDate =
        props.value != undefined ? new Date(props.value) : new Date();

    return (
        <MuiPickersUtilsProvider utils={ DateFnsUtils } locale={ ja }>
            <KeyboardDatePicker
                disableToolbar
                label={ props.label }
                format={ format }
                variant="inline"
                onChange={ picked }
                value={ date }
            ></KeyboardDatePicker>
        </MuiPickersUtilsProvider>
    )
}

export default DatepickerForm
