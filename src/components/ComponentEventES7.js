import React,{Component} from 'react'


export default class ComponentEventES7 extends Component{
    

    state = this.state = {
        counter : 0
    }

    

    increase = () => {
        console.log('Adding');
        console.log(this);
        
        this.setState({
            counter: this.state.counter + 1
        })
        
    }

    decrease = () =>{
        console.log('Adding');
        console.log(this);
        
        this.setState({
            counter: this.state.counter - 1
        })
        
    }

    render(){
        console.log(this);
        return(
            <div id="component_event">
                <br></br>
                <h1>Event Component ES7</h1>
                <p>
                {this.state.counter}
                </p>
                <button onClick={this.increase}>+</button>
                <button onClick={this.decrease}>-</button>
            </div>
        )
    }
}