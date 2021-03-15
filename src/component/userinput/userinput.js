import React from 'react';

let userinput=(props)=>{
    const style={
        border:'2px solid red'
    }
    return (
    <div>
    <p>HI, i am {props.default}</p> 
    <input 
    type='text' 
    style={style}
    onChange={props.changed}
    value={props.default}
    />
    </div>
    )
};
export default userinput;