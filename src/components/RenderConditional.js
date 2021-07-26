import React, {Component} from 'react';

function Login(){
    return(
        <div>
            <h2>Login</h2>
        </div>
    )
}

function Logout(){
    return(
        <div>
            <h2>Logout</h2>
        </div>
    )
}


export default class RenderingConditional  extends Component{

    constructor(props){
        super(props);
        this.state = {
            is_logged : true
        }
    }

    render(){
        return(
            <div id="main">
                <h1>Render Conditional</h1>
                { this.state.is_logged == true ? <Login></Login> : <Logout></Logout> }
                
                
                
            </div>
        )
    }
}