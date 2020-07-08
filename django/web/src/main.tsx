import React from 'react';
import ReactDOM from 'react-dom';

import TextForm from './Components/Common/TextForm';

type State = {
    value?: string | number
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
            </div>
        );
    }

    setValue(value: string|number) {
        console.log(value);
        this.setState({ value: value });
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
