import React,{Component, Fragment} from 'react';

class ComponentLifeCycle extends Component{

    constructor(props){
        super(props);
        console.log('mount cycle 0:','constructor');

        //state
        this.state = {
            my_date : new Date().toLocaleTimeString(),
        
        }

        this.timer = null;
    }

    componentDidMount(){
        console.log('mount cycle 1:','componentDidMount');
    }

    componentDidUpdate(prevProps,prevState){
        console.log('mount cycle 2:','componentDidUpdate');
        console.log(prevProps);
        console.log(prevState);
        
    }

    tic_tac = () => {
        if(this.timer !== null){
            clearInterval(this.timer);
        }
        this.timer = setInterval(()=>{
            //Update state
            this.setState({
                my_date: new Date().toLocaleTimeString()
            });
        },1000);
        
        
        
        console.log('timer init =>',this.timer);
    }
    start_clock = (e) =>{
        this.tic_tac();
    }

    stop_clock = (e) =>{
        console.log('timer',this.timer);
        clearInterval(this.timer);
    }
    render(){
        console.log('mount cycle 4: ','render');
        return(
            <Fragment>
                <h1>Component Life Cycle</h1>
                <p>
                    {this.state.my_date}
                </p>
                <button onClick={this.start_clock}>Start</button>
                <button onClick={this.stop_clock}>Stop</button>
                
            </Fragment>
        )
    }
} 


export default ComponentLifeCycle;