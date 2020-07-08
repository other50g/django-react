import React from 'react';
import ReactDOM from 'react-dom';

import TextForm from './Components/Common/Form/TextForm';
import DatepickerForm from './Components/Common/Form/DatepickerForm';

type State = {
    value?: string | number,
    date_value?: string,
}

type Props = {

}

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            value: undefined
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
                    onChange={ this.setValue }
                ></DatepickerForm>
            </div>
        );
    }

    setValue(value: string|number) {
        this.setState({ value: value });
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
