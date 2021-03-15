import React from 'react'
import Comp from './comp'


let App=()=> {
    let userINfo={
        userName:'Raj'
    }     
        return (
            <div>
                <p>hi i am React</p>
                <Comp userinfo={userINfo}/>
                
            </div>
        )
    }


export default App;