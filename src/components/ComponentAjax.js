import React, {Component, Fragment} from 'react';

function Pokemon(props){
    return(
        <Fragment>
            <h2>Pokemon</h2>
            <figure>
                <img src="test.jpg"></img>
                <figcaption>Pokemon name</figcaption>
            </figure>
        </Fragment>
    )
}

class ComponentAjax extends Component{
    constructor(props){
        super(props);
        this.state = {
            pokemons:[]
        }
    }

    componentDidMount(){
        let url = 'https://pokeapi.co/api/v2/pokemon';

        fetch(url).then((res)=>{
            console.log(res);
            return res.json();
        }).then((data)=>{
            console.log(data);
            data.results.forEach(el =>{
                console.log(el);
            });
        });
    }

    render(){
        return(
            <Fragment>
                <h1>Component Ajax</h1>
            </Fragment>
        )
    }
}

export default ComponentAjax;