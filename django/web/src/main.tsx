import React from 'react';
import ReactDOM from 'react-dom';

import TextForm from './Components/Common/TextForm';


class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Change Getter 1 Switch ON!</h1>
                <TextForm></TextForm>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
