import React, { Component } from 'react'
import Login from './login'
export default class App extends Component {
    render() {
        return (
            <div>
                <nav className='navbar navbar-dark bg-dark'>
                    <a href="/">React Conditional Rendeering</a>
                    </nav>
                <Login/>
            </div>
        )
    }
}
