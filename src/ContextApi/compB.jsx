import React from 'react'
import UserContext from './UserContext'

export default function compB() {
    return (
        <div>
            <h1>CompB</h1>
            <UserContext.Consumer>
                {
                   (userInfo)=>(<span>{JSON.stringify(userInfo)}</span>)
                }
            </UserContext.Consumer>
        </div>
    )
}
