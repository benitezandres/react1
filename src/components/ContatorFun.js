import React , {useState} from 'react';

function ContadorFun(){
    //Variables
    const [counter,setCounter] = useState(0);
    const [state1,setState1] = useState(true);
    //console.log(useState());

    /*
    function add(e){
        console.log('Add',e);
        console.log(this);
    }
    */

    const add = (e) =>{

        console.log('Add');
        
        
        if(state1){
            console.log('Check counter');
            if(counter + 1 > 0){
                console.log('Change state');
                setState1(false);
            }
        }

        setCounter(counter+1);
    }

    const subtract = (e) =>{

        console.log('Subtract');
        if(counter-1 == 0){
            setCounter(0);
            setState1(true);
            return;
        }
        console.log('Counter =>',counter);
        setCounter(counter-1);
    }

    return(
        <div>
            <h1>Contador Func</h1>
            <button onClick={add}>+</button>
            <button onClick={subtract} disabled={state1}>-</button>
            <h2>{counter}</h2>
        </div>
    );
}

export default ContadorFun;