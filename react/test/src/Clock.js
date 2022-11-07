import React from "react";
export default class Clock extends React.Component {
    constructor(props) {
        console.log("dans constructeur");
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount(){
        console.log("dans componentDidMount");
        this.timerID = setInterval(() => this.setState({
                date : new Date()
            }),1000
        );
    };
    componentWillUnmount(){
        console.log("dans componentWillUnount");
        clearInterval(this.timerID);
    };
    render() {
        console.log("dans la méthode render");
        return (
            <div>
                <h1>{this.props.message}</h1>
                <h2>Il est {this.state.date.toLocaleTimeString()}.
                </h2> 
            </div>
        );
    }
}