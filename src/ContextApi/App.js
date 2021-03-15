import React from 'react'
import Comp from './comp'
import USerContext from'./UserContext'


let App=()=> {
    let userInfo={
        userName:'Raj'
    }     
        return (
            <div>
                <p>hi i am React</p>
                <span>{JSON.stringify(userInfo)}</span>
                <USerContext.Provider value={userInfo}>
                     <Comp/>
                </USerContext.Provider>
            </div>
        )
    }


export default App;