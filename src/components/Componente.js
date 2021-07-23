import React,{Component} from 'react';

/*
class Componente extends Component{
    render(){
        return <h1>{this.props.msg}</h1>
    }
}
*/

function Componente(props){
    return(
        <div>
            <h1>{props.msg}</h1>
            <h2>{props.nombre_defecto}</h2>
            <ul>
                {props.arreglo.map((e,i)=>{
                    console.log(e,i);
                    return <li key={i}>{e.toUpperCase()}</li>;
                })}
            </ul>
        </div>
    )
}

Componente.defaultProps={
    nombre_defecto:'Nombre por defecto'
}
export default Componente;