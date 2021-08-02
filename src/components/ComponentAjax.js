import React, {Component, Fragment} from 'react';

function Pokemon(props){
    return(
        <Fragment>
            <h2>Pokemon</h2>
            <figure>
                <img src={props.avatar}></img>
                <figcaption>{props.name}</figcaption>
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
            //console.log(res);
            return res.json();
        }).then((data)=>{
            //console.log(data);
            data.results.forEach(el =>{
                //console.log(el);
                fetch(el.url).then((resp)=>{
                    return resp.json();
                }).then((data)=>{
                    //console.log(data);
                    let pokemon = {
                        id:data.id,
                        name:data.name,
                        avatar:data.sprites.front_default
                    }
                    let pokemons = [...this.state.pokemons,pokemon];
                    //pokemons[data.id] = pokemon;
                    //update state
                    this.setState({
                        pokemons:pokemons
                    })
                    console.log(pokemons);

                });
            });
        });
    }

    render(){
        return(
            <Fragment>
                <h1>Component Ajax</h1>
               {this.state.pokemons.length === 0 ? (
               <h3>Cargando</h3> 
               ) : (
                    this.state.pokemons.map((ele)=>{
                        return <Pokemon key={ele.id} name={ele.name} avatar={ele.avatar}></Pokemon>
                    })
               )}
            </Fragment>
        )
    }
}

export default ComponentAjax;