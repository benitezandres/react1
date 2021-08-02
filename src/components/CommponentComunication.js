import React,{Component, Fragment} from 'react';


export default class CommunicationParent extends Component{

    constructor(props){
        super(props);
        this.state = {
            counter:0
        }
    }

    increment = (e) =>{
        this.setState({
            counter: this.state.counter + 1
        });
    }
    render(){
        return(
            <Fragment>
                <h1>Communication Component</h1>
                <h2>Counter { this.state.counter }</h2>
                <button>Click</button>
                <CommunicationChild msg="Child 1" fone={this.increment}></CommunicationChild>
                <CommunicationChild msg="Cuild 2"></CommunicationChild>
            </Fragment>
        )    
    }
}


function CommunicationChild(props){
    return(
        <Fragment>
            <h2>CommunicationChild</h2>
            <h3>{props.msg}</h3>
            <button onClick={props.fone}>Click!</button>
        </Fragment>
    )
}