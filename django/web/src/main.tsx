import React from 'react';
import ReactDOM from 'react-dom';

import TextForm from './Components/Common/Form/TextForm';
import DatepickerForm from './Components/Common/Form/DatepickerForm';
import RadioGroupForm from './Components/Common/Form/RadioGroupForm';
import Radio from './Components/Common/Form/Radio';

type Option = {
    value: string|number,
    text: string
}

type State = {
    value?: string | number,
    date_value?: string,
    options?: Array<Option>
}

type Props = {

}

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            value: undefined,
            options: [
                { 'text': 'テスト', 'value': '1' },
                { 'text': 'テスト2', 'value': '2' }
            ]
        };
        this.setValue = this.setValue.bind(this);
    }

    render() {
        return (
            <div>
                <h1>React RUN!</h1>
                <h2>{ this.state.value }</h2>
                <TextForm
                    label="テスト"
                    onChange={ this.setValue }
                ></TextForm>
                <DatepickerForm
                    label="テスト"
                    value={ this.state.date_value }
                    onChange={ (value: string) => this.setState({ date_value: value }) }
                ></DatepickerForm>
                <RadioGroupForm
                    label="テスト"
                >
                    { this.state.options?.map((option, index) => {
                        return <Radio label={ option.text } value={ option.value } key={ index }></Radio>
                    }) }
                </RadioGroupForm>
            </div>
        );
    }

    setValue(value: string|number) {
        this.setState({ value: value });
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
