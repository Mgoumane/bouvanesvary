import React from "react";

export default class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isToggleOn: true
        };
    };

    hadleClick = () => {
        this.setState({
            isToggleOn: !this.state.isToggleOn
        });
    }

    render() {
        return (
            <button onClick={this.hadleClick}>
                { this.state.isToggleOn ? "ON" : "OF" }
            </button>
        );
    };
};