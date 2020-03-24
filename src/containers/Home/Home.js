import React, { Component } from 'react';

import Controls from './Controls/Controls';
import './Home.css';

class Main extends Component {

    render() {

        return (
            <div className="Home">
                <Controls/>
            </div>
        );
    }
}

export default Main;