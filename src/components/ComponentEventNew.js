import React,{Component} from 'react'

/*
function ComponentButton(props){
    return(
        
        <div>
            <br></br>
            <button onClick={props.event1}>Component Button</button>
        </div>
    )
}
*/
//This make the component reusable
const ComponentButton = (props) =>{
    return(
        
        <div>
            <br></br>
            <button onClick={props.event1}>Component Button</button>
        </div>
    )
}

export default class ComponentEventNew extends Component{
    
    constructor(props){
        super(props);
    }


    handle_click = (e,msg) =>{
        console.log(e);
        console.log(e.target);
        console.log(msg);
    }

    render(){
        return(
            <div id="custom_event">
                <h1>Custom Component Event</h1>
                <button onClick={(e)=>{
                    this.handle_click(e,'Andres');
                }}>Hi!</button>
                {/*Personalized event*/}
                <ComponentButton event1={(e)=>{
                    this.handle_click(e,'Otro evento')
                }}></ComponentButton>
            </div>
        )
    }
}