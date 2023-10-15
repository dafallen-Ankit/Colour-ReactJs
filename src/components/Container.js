import React, { Component } from 'react';

const arr = [
    { name: "Red", value: "#cf0606" },
    { name: "Green", value: "#07ed1e" },
    { name: "Blue", value: "#073ded" },
    { name: "Yellow", value: "#e9ed07" },
    { name: "Magenta", value: "#ed07ed" },
    { name: "Cyan", value: "#07ede9" },
    { name: "Orange", value: "#faa716" },
    { name: "Purple", value: "#91276a" },
    { name: "Light Pink", value: "#fcd0c7" },
    { name: "Dark Green", value: "#28a745" },
    { name: "Orange Red", value: "#e65f05" },
    { name: "Dark Blue", value: "#087bc7" },
    { name: "Brown", value: "#4a1b07" },
    { name: "Orange Yellow", value: "#f57842" },
    { name: "Navy", value: "#164266" },
    { name: "Olive", value: "#b89c12" }
];

export class Container extends Component {
    constructor() {
        super();
        this.state = {
            color: "#28a745",
            toggle: false
        };
    }

    handleColor = () => {
        this.setState({
            toggle: !this.state.toggle
        });
    }

    checkColor = (color) => {
        this.setState({
            color: color,
            toggle: false
        });

        alert(`Selected color: ${color.name}`);
    }

    render() {
        return (
            <div className='container-lg mt-1 px-5 d-flex flex-column align-items-center' style={{ height: "700px", backgroundColor: "#bfa3cc" }}>
                <h2 className='pt-5 fw-bolder'>Color Picker</h2>
                <div className="container-lg mt-3 border" style={{ backgroundColor: "#fcd0c7", height: "550px", borderRadius: "20px", boxShadow: "2px 2px 8px black" }}>
                    <div className='d-flex justify-content-center align-items-center my-5'>
                        {this.state.toggle ? arr.map((color, index) => (
                            <button key={index} onClick={() => this.checkColor(color)} className='mx-2 border-0' style={{ width: "50px", height: "50px", backgroundColor: color.value, boxShadow: "2px 2px 10px #3b383a" }}></button>
                        )) : null}
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button id="clickButton" className='text-light border-0 px-3 py-2' onClick={this.handleColor} style={{ backgroundColor: this.state.color }}>Pick a color</button>
                    </div>
                </div>
            </div>
        );
    }
}