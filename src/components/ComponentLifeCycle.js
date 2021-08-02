import React,{Component, Fragment} from 'react';

class ComponentClock extends Component{
    constructor(props){
        super(props);

    }

    componentWillUnmount(){
        console.log('mount cycle 3:','componentWillUnmount');
        
    }

    render(){
        return(
            <Fragment>
                <p>Time: {this.props.my_time}</p>
            </Fragment>
        )
    }
}

class ComponentLifeCycle extends Component{

    constructor(props){
        super(props);
        console.log('mount cycle 0:','constructor');

        //state
        this.state = {
            my_date : new Date().toLocaleTimeString(),
            visible: false
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

    componentWillUnmount(){
        console.log('mount cycle 3:','componentWillUnmount');
        
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
        this.setState({
            visible:true
        });
    }

    stop_clock = (e) =>{
        console.log('timer',this.timer);
        clearInterval(this.timer);
        this.setState({
            visible:false
        });
    }
    render(){
        console.log('mount cycle 4: ','render');
        return(
            <Fragment>
                <h1>Component Life Cycle</h1>
                {this.state.visible ? <ComponentClock my_time={this.state.my_date}></ComponentClock> : null}
                
                <button onClick={this.start_clock}>Start</button>
                <button onClick={this.stop_clock}>Stop</button>
                
            </Fragment>
        )
    }
} 


export default ComponentLifeCycle;