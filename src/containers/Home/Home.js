import React, { Component } from 'react';

import Controls from './Controls/Controls';
import './Home.css';

class Main extends Component {

    state = {
        tiled: false,
        RendererSelectedOption: "cpp",
        ThreeDSelectionOption: "2D",
        ThreeDSelectionParam: false,
        ThemeSelectionOption: "Customize",
        ColorsSelectionOption: "MediumGradient",
        ColorShiftValue: "0",
        DarkenTexture: true,
        SmoothTexture: false,
        StringLightsTexture: false,
        FancifulTexture: false,
        ShadowTexture: false,
        RoundedEdgesTexture: false,
        EdgeSelectionOption: "Curved",
        DepthValue: "30",
        Morph1Value: "50",
        Morph2Value: "50",
        DarkMorphValue: "50",
        ZAdjustValue: "50",
        MotionSelectionOption: "Position"
    }

    inputChangedHandler = (event) => {
        this.setState({ tiled: !this.state.tiled })
    }

    render() {

        return (
            <div className="App">
                <h1>Control + Fractal Image</h1>
                <Controls
                
                
                
                />
            </div>
        );
    }
}

export default Main;