import React,{Component} from 'react';

/*
class Componente extends Component{
    render(){
        return <h1>{this.props.msg}</h1>
    }
}
*/

function One(props){
    return(
        <div>
            <h1>{props.msg}</h1>
            <h2>{props.name_df}</h2>
            <ul>
                {/*Render props sent from parent*/}
                {props.fruits.map((e,i)=>{
                    console.log(e,i);
                    return <li key={i}>{e.toUpperCase()}</li>;
                })}
            </ul>
        </div>
    )
}

One.defaultProps={
    name_df:'Nombre por defecto'
}
export default One;