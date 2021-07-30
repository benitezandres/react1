import React, {Component} from 'react';

//JSON File
import data from './helpers/data.json'

function ElementoLista(props){
    return(
        <li key={props.ele.id}>{props.ele.name} - {props.ele.web}</li>
    )
}

export default class RenderElement extends Component{

    constructor(props){
        super(props);

        this.state = {
            seasons : ['Winter','Summer','Spring','Autumm']
        }
    }



    render(){

        console.log(data);
        return(
            <div>
                <h1>Render Element</h1>
                {
                    this.state.seasons.map((ele,index)=>{
                        return <li key={index}>{ele}</li>
                    })
                }
                <br/>
                {
                    data.frameworks.map((ele,index)=>{
                        return(
                            <div id="main" key={index}>
                                <ElementoLista ele={ele} key={index}></ElementoLista>
                                
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}