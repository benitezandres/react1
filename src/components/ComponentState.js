import React,{Component} from 'react';

function StateChild(props){
    return(
        <div id="child">
            <h2>State Child {props.counter}</h2>
        </div>
    )
}

export default class ComponentState extends Component{

    constructor(props){
        super(props);
        console.log('props =>',props);
        //console.log(this.props.msg);

        this.state = {
            counter : 0
        }

        setInterval(()=>{
            this.setState({
                counter: this.state.counter + 1
            });
        },1000);

    }
    render(){
        console.log(this.props.msg);
        return(
            
            <div id="main">
            <h1>Component State {this.state.counter}</h1>
            <StateChild counter={this.state.counter}></StateChild>
            </div>
        )
    }
}