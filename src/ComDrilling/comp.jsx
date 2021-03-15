import React from 'react'
import CompA from './compA'

export default function Comp(props) {
    return (
        <div>
            <CompA userinfo={props.userinfo}/>
            
        </div>
    )
}


