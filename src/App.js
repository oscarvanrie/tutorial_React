import React, { useState } from 'react';
function handleClick() {
   alert("You clicked me!");
}
function MyButton({count, onPressed}) {


    return (
        <button onClick={onPressed}> 
            clicked {count} times
        </button>
    
    )
}

function CounterDec() {
    var [counterdec, setCounterdec] = useState(0);

    function ButtonClicked() {
        setCounterdec(counterdec- 1);

    }

    return (
        <button onClick={ButtonClicked}>
            you clicked the button {counterdec} times
        </button>
    )
}

function CounterUpp() {
    var [counterUpp, setCounterUpp] = useState(0);
     function ButtonClicked() {
        setCounterUpp(counterUpp + 1)
    }

    return (
        <button onClick={ButtonClicked}>
            you pressed this button {counterUpp} times

        </button>
    )
}

export default function MyApp() {

    var [counter, setCount] = useState(0);

    function buttonPressed () {
        setCount(counter + 1);
    }
return (
   <>
    <MyButton count={counter} onPressed={buttonPressed} />
    
    <MyButton count={counter} onPressed={buttonPressed} />
    
    <MyButton count={counter} onPressed={buttonPressed} />

    <CounterDec />

    <CounterUpp />
   </> 
);
}

