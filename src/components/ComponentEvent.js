import React,{Component} from 'react'


export default class ComponentEvent extends Component{
    constructor(props){
        super(props);

        this.state = {
            counter : 0
        }

        //Binding
        this.increase = this.increase_Counter.bind(this);
        this.decrease = this.decrease_Counter.bind(this);
    }

    increase_Counter(){
        console.log('Adding');
        console.log(this);
        
        this.setState({
            counter: this.state.counter + 1
        })
        
    }

    decrease_Counter(){
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
                <h1>Event Component </h1>
                <p>
                {this.state.counter}
                </p>
                <button onClick={this.increase}>+</button>
                <button onClick={this.decrease}>-</button>
            </div>
        )
    }
}