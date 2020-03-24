import React, { Component } from 'react';
import './Controls.css';
import Input from '../../../components/UI/Input/Input'
import { updateObject} from '../../../shared/utility';

class Controls extends Component {

    state = {
        Renderer:{
            tiled: {
                id:'tiled',
                label:'Tiled',
                elementType: 'input',
                elementConfig: {
                    type: 'checkbox',
                },
                value: true,
                touched: false
            },
            python: {
                id:'python',
                label:'Python',
                elementType: 'input',
                elementConfig: {
                    type: 'radio',
                },
                value: 'python',
                touched: false
            },
            cpp: {
                id:'cpp',
                label:'C++',
                elementType: 'input',
                elementConfig: {
                    type: 'radio',
                },
                value: 'cpp',
                touched: false
            },
            fpga: {
                id:'fpga',
                label:'FPGA',
                elementType: 'input',
                elementConfig: {
                    type: 'radio',
                },
                value: 'fpga',
                touched: false
            }
        },
        Dimensions:{
            TwoD: {
                id:'2D',
                label:'2-D',
                elementType: 'input',
                elementConfig: {
                    type: 'radio',
                },
                value: '2D',
                touched: false
            },
            ThreeD: {
                id:'3D',
                label:'3-D',
                elementType: 'input',
                elementConfig: {
                    type: 'radio',
                },
                value: '3D',
                touched: false
            },
            Stereo3D: {
                id:'Stereo3D',
                label:'Stereo 3-D',
                elementType: 'input',
                elementConfig: {
                    type: 'radio',
                },
                value: 'Stereo3D',
                touched: false
            }
        },
        Theme:{
            Customize: {
                id:'Customize',
                label:'Customize',
                elementType: 'input',
                elementConfig: {
                    type: 'radio',
                },
                value: 'Customize',
                touched: false
            },
            Christmas: {
                id:'Christmas',
                label:'Christmas',
                elementType: 'input',
                elementConfig: {
                    type: 'radio',
                },
                value: 'Christmas',
                touched: false
            }
        },
        Colors:{
            MediumGradient: {
                id:'MediumGradient',
                label:'Medium Gradient',
                elementType: 'input',
                elementConfig: {
                    type: 'radio',
                },
                value: 'MediumGradient',
                touched: false
            },
            Random: {
                id:'Random',
                label:'Random',
                elementType: 'input',
                elementConfig: {
                    type: 'radio',
                },
                value: 'Random',
                touched: false
            },
            GradualGradient: {
                id:'GradualGradient',
                label:'Gradual Gradient',
                elementType: 'input',
                elementConfig: {
                    type: 'radio',
                },
                value: 'GradualGradient',
                touched: false
            },
            Rainbow: {
                id:'Rainbow',
                label:'Rainbow',
                elementType: 'input',
                elementConfig: {
                    type: 'radio',
                },
                value: 'Rainbow',
                touched: false
            }
        },
        ZShift: {
            id:'ZShift',
            label:'Z-Shift',
            elementType: 'input',
            elementConfig: {
                type: 'range',
                name:"Z-Shift",
                min:"0",
                max:"99"
            },
            value: "0",
            touched: false
        },
        Texture:{
            Darken: {
                id:'Darken',
                label:'Darken',
                elementType: 'input',
                elementConfig: {
                    type: 'checkbox',
                },
                value: true,
                touched: false
            },
            Smooth: {
                id:'Smooth',
                label:'Smooth',
                elementType: 'input',
                elementConfig: {
                    type: 'checkbox',
                },
                value: false,
                touched: false
            },
            StringLights: {
                id:'StringLights',
                label:'String Lights',
                elementType: 'input',
                elementConfig: {
                    type: 'checkbox',
                },
                value: false,
                touched: false
            },
            Fanciful: {
                id:'Fanciful',
                label:'Fanciful',
                elementType: 'input',
                elementConfig: {
                    type: 'checkbox',
                },
                value: false,
                touched: false
            },
            Shadow: {
                id:'Shadow',
                label:'Shadow',
                elementType: 'input',
                elementConfig: {
                    type: 'checkbox',
                },
                value: false,
                touched: false
            },
            RoundedEdges: {
                id:'RoundedEdges',
                label:'Rounded Edges',
                elementType: 'input',
                elementConfig: {
                    type: 'checkbox',
                },
                value: false,
                touched: false
            },
        },
        TextureMap:{
            Darken: 'DarkenTexture',
            Smooth: 'SmoothTexture',
            StringLights: 'StringLightsTexture',
            Fanciful: 'FancifulTexture',
            Shadow: 'ShadowTexture',
            RoundedEdges: 'RoundedEdgesTexture',
        },
        Edge:{
            Curved: {
                id:'Curved',
                label:'Curved',
                elementType: 'input',
                elementConfig: {
                    type: 'radio',
                },
                value: 'Curved',
                touched: false
            },
            Bumpy: {
                id:'Bumpy',
                label:'Bumpy',
                elementType: 'input',
                elementConfig: {
                    type: 'radio',
                },
                value: 'Bumpy',
                touched: false
            },
            Villi: {
                id:'Villi',
                label:'Villi',
                elementType: 'input',
                elementConfig: {
                    type: 'radio',
                },
                value: 'Villi',
                touched: false
            }
        },
        Adjustments:{
            Depth: {
                id:'Depth',
                label:'Depth',
                elementType: 'input',
                elementConfig: {
                    type: 'range',
                    name:"Depth",
                    min:"0",
                    max:"99"
                },
                value: "30",
                touched: false
            },
            Morph1: {
                id:'Morph1',
                label:'Morph 1',
                elementType: 'input',
                elementConfig: {
                    type: 'range',
                    name:"Morph1",
                    min:"0",
                    max:"99"
                },
                value: "50",
                touched: false
            },
            Morph2: {
                id:'Morph2',
                label:'Morph 2',
                elementType: 'input',
                elementConfig: {
                    type: 'range',
                    name:"Morph2",
                    min:"0",
                    max:"99"
                },
                value: "50",
                touched: false
            },
            DarkMorph: {
                id:'DarkMorph',
                label:'Dark/Morph Adjust',
                elementType: 'input',
                elementConfig: {
                    type: 'range',
                    name:"DarkMorph",
                    min:"0",
                    max:"99"
                },
                value: "50",
                touched: false
            },
            ZAdjust: {
                id:'ZAdjust',
                label:'Z Adjust',
                elementType: 'input',
                elementConfig: {
                    type: 'range',
                    name:"ZAdjust",
                    min:"0",
                    max:"99"
                },
                value: "50",
                touched: false
            },
        },
        AdjustmentsMap:{
            Depth: 'DepthValue',
            Morph1: 'Morph1Value',
            Morph2: 'Morph2Value',
            DarkMorph: 'DarkMorphValue',
            ZAdjust: 'ZAdjustValue',
        },
        Motion:{
            Position: {
                id:'Position',
                label:'Position',
                elementType: 'input',
                elementConfig: {
                    type: 'radio',
                },
                value: 'Position',
                touched: false
            },
            Velocity: {
                id:'Velocity',
                label:'Velocity',
                elementType: 'input',
                elementConfig: {
                    type: 'radio',
                },
                value: 'Velocity',
                touched: false
            }
        },
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

    componentDidUpdate() {
        // console.log(this.state.ColorShiftValue);
    }

    inputChangedHandler = (event, secIdentifier, configIdentifier, varIdentifier ) =>{
        if( secIdentifier === 'ThreeDSelectionOption' ){
            switch(varIdentifier) {
                case '2D':
                    varIdentifier='TwoD';
                    break;
                case '3D':
                    varIdentifier='ThreeD';
                    break;  
                default:
            } 
        }

        if( varIdentifier === 'tiled' ){
            this.setState({[varIdentifier]: !this.state[varIdentifier]});
        }else if( configIdentifier === 'Texture' ){
            this.setState({[secIdentifier]: !this.state[secIdentifier]});
        }else if( varIdentifier === 'ZShift' ){
            this.setState({[secIdentifier]: event.target.value});

            const updated = updateObject( this.state.configIdentifier, {
                value: event.target.value,
                touched: true,
            } );
            this.setState({configIdentifier: updated});
            console.log(this.state.ColorShiftValue);
        }else{
            this.setState({[secIdentifier]: event.target.value});

            const updated = updateObject( this.state.configIdentifier, {
                [varIdentifier]: updateObject( this.state[configIdentifier][varIdentifier],{
                    value: event.target.value,
                    touched: true,
                } )
            } );
            this.setState({configIdentifier: updated});
        }
    }

    render(){

        const RendererElementsArray = [];
        for (let key in this.state.Renderer) {
            RendererElementsArray.push({
                id: key,
                config: this.state.Renderer[key]
            });
        }

        const DimensionsElementsArray = [];
        for (let key in this.state.Dimensions) {
            DimensionsElementsArray.push({
                id: key,
                config: this.state.Dimensions[key]
            });
        }

        const ThemeElementsArray = [];
        for (let key in this.state.Theme) {
            ThemeElementsArray.push({
                id: key,
                config: this.state.Theme[key]
            });
        }

        const ColorsElementsArray = [];
        for (let key in this.state.Colors) {
            ColorsElementsArray.push({
                id: key,
                config: this.state.Colors[key]
            });
        }

        const TextureElementsArray = [];
        for (let key in this.state.Texture) {
            if( this.state.RendererSelectedOption === "cpp" ){
                TextureElementsArray.push({
                    id: key,
                    config: this.state.Texture[key]
                });
            }else{
                if( key === 'Darken' ){
                    TextureElementsArray.push({
                        id: key,
                        config: this.state.Texture[key]
                    });
                }    
            }
            
        }

        const EdgeElementsArray = [];
        for (let key in this.state.Edge) {
            EdgeElementsArray.push({
                id: key,
                config: this.state.Edge[key]
            });
        }

        const AdjustmentsElementsArray = [];
        for (let key in this.state.Adjustments) {
            if( this.state.RendererSelectedOption !== "python" && (this.state.ThreeDSelectionOption === "3D" || this.state.ThreeDSelectionOption === "Stereo3D") && key === 'ZAdjust' ){
                AdjustmentsElementsArray.push({
                    id: key,
                    config: this.state.Adjustments[key]
                });
            }else if( this.state.DarkenTexture && this.state.RendererSelectedOption !== "python" && key === 'DarkMorph' ){
                AdjustmentsElementsArray.push({
                    id: key,
                    config: this.state.Adjustments[key]
                });
            }else if( this.state.RendererSelectedOption === "cpp" && ( key === 'Morph1' || key === 'Morph2' ) ){
                AdjustmentsElementsArray.push({
                    id: key,
                    config: this.state.Adjustments[key]
                });
            }else if( key === 'Depth' ){
                AdjustmentsElementsArray.push({
                    id: key,
                    config: this.state.Adjustments[key]
                });
            }   
        }

        const MotionElementsArray = [];
        for (let key in this.state.Motion) {
            MotionElementsArray.push({
                id: key,
                config: this.state.Motion[key]
            });
        }

        let Renderer = (
            <div className="Item">
                <h2>Renderer</h2>
                <div>
                {RendererElementsArray.map(element => ( 
                    <Input 
                        key={element.id}
                        label={element.config.label}
                        elementType={element.config.elementType}
                        elementConfig={element.config.elementConfig}
                        value={element.config.value}
                        check={ (element.config.id !== 'tiled' && this.state.RendererSelectedOption === element.config.id) || (element.config.id === 'tiled' && this.state.tiled) }
                        touched={element.config.touched}
                        changed={(event) => this.inputChangedHandler(event, 'RendererSelectedOption', 'Renderer', element.id )} />
                ))}
                </div>
            </div>
        );

        let Dimensions = null;
        let Motion = null;

        if( !this.state.tiled ){
            Dimensions = (
                <div className="Item">
                    <h2>3-D</h2>
                    <div>
                        {DimensionsElementsArray.map(element => (
                            <Input 
                                key={element.id}
                                label={element.config.label}
                                elementType={element.config.elementType}
                                elementConfig={element.config.elementConfig}
                                value={element.config.value}
                                check={this.state.ThreeDSelectionOption === element.config.id}
                                touched={element.config.touched}
                                changed={(event) => this.inputChangedHandler(event, 'ThreeDSelectionOption', 'Dimensions' ,element.id )} />
                        ))}
                    </div>
                </div>
            );

            Motion = (
                <div className="Item">
                    <h2>Theme</h2>
                    <div>
                        {MotionElementsArray.map(element => (
                            <Input 
                                key={element.id}
                                label={element.config.label}
                                elementType={element.config.elementType}
                                elementConfig={element.config.elementConfig}
                                value={element.config.value}
                                check={this.state.MotionSelectionOption === element.config.id}
                                touched={element.config.touched}
                                changed={(event) => this.inputChangedHandler(event, 'MotionSelectionOption', 'Motion' ,element.id )} />
                        ))}
                    </div>
                </div>
            );
        }

        let Theme = null;
        if( this.state.RendererSelectedOption === 'cpp' ){
            Theme = (
                <div className="Item">
                    <h2>Theme</h2>
                    <div>
                        {ThemeElementsArray.map(element => (
                            <Input 
                                key={element.id}
                                label={element.config.label}
                                elementType={element.config.elementType}
                                elementConfig={element.config.elementConfig}
                                value={element.config.value}
                                check={this.state.ThemeSelectionOption === element.config.id}
                                touched={element.config.touched}
                                changed={(event) => this.inputChangedHandler(event, 'ThemeSelectionOption', 'Theme' ,element.id )} />
                        ))}
                    </div>
                </div>
            );
        }

        let Colors = (
            <div className="Item" >
                <h2>Colors</h2>
                <div>
                    {ColorsElementsArray.map(element => (
                        <Input 
                            key={element.id}
                            label={element.config.label}
                            elementType={element.config.elementType}
                            elementConfig={element.config.elementConfig}
                            value={element.config.value}
                            check={this.state.ColorsSelectionOption === element.config.id}
                            touched={element.config.touched}
                            changed={(event) => this.inputChangedHandler(event, 'ColorsSelectionOption', 'Colors' ,element.id )} />
                    ))}
                    <Input
                        label={this.state.ZShift.label}
                        elementType={this.state.ZShift.elementType}
                        elementConfig={this.state.ZShift.elementConfig}
                        value={this.state.ColorShiftValue}
                        changed={(event) => this.inputChangedHandler(event, 'ColorShiftValue', 'ZShift' , this.state.ZShift.id )} />
                </div>
            </div>
        );

        if(this.state.RendererSelectedOption === "python" || !this.state.RendererSelectedOption === "fpga" || this.state.ThemeSelectionOption === "Christmas"){
            Colors = null;
        }
        
        let Texture = null;
        let Adjustments = null;

        if( this.state.ThemeSelectionOption !== "Christmas" ){
            Texture = (
                <div className="Item">
                    <h2>Texture</h2>
                    <div>
                    {TextureElementsArray.map(element => ( 
                        <Input 
                            key={element.id}
                            label={element.config.label}
                            elementType={element.config.elementType}
                            elementConfig={element.config.elementConfig}
                            value={element.config.value}
                            check={this.state[this.state.TextureMap[element.id]]}
                            touched={element.config.touched}
                            changed={(event) => this.inputChangedHandler(event, this.state.TextureMap[element.id], 'Texture' ,element.config.id )} />                        
                    ))}
                    </div>
                </div>
            );

            Adjustments = (
                <div className="Item">
                    <h2>Adjustments</h2>
                    <div>
                        {AdjustmentsElementsArray.map(element => (
                            <Input
                                key={element.id}
                                label={element.config.label}
                                elementType={element.config.elementType}
                                elementConfig={element.config.elementConfig}
                                value={this.state[this.state.AdjustmentsMap[element.id]]}
                                changed={(event) => this.inputChangedHandler(event, this.state.AdjustmentsMap[element.id], 'Adjustments' , element.config.id )} />
                        ))}
                        
                    </div>
                </div>
            );
    
        }

        let Edge = (
            <div className="Item">
                <h2>Edge</h2>
                <div>
                {EdgeElementsArray.map(element => ( 
                    <Input 
                        key={element.id}
                        label={element.config.label}
                        elementType={element.config.elementType}
                        elementConfig={element.config.elementConfig}
                        value={element.config.value}
                        check={ this.state.EdgeSelectionOption === element.id }
                        touched={element.config.touched}
                        changed={(event) => this.inputChangedHandler(event, 'EdgeSelectionOption', 'Edge', element.id )} />
                ))}
                </div>
            </div>
        );

        if(this.state.RendererSelectedOption === "python" || this.state.RendererSelectedOption === "fpga" || this.state.ThemeSelectionOption === "Christmas"){
            Edge = null;
        }
        
        return (
            <div style={{ display: 'flex', marginBottom: '10px' }}>
                {Renderer}
                {Dimensions}
                {Theme}
                {Colors}
                {Texture}
                {Edge}
                {Adjustments}
                {Motion}
            </div>
        );
    }
}

export default Controls;