import React, { Component } from 'react'
import ContactApp from './Contact_App'
export default class App extends Component {
    constructor(props){
        super(props);
        
    }
    render() {
        return (
            <>
            <nav className="navbar nav-dark bg-dark">
                <a href='/'>React-App</a>
            </nav>
                <ContactApp/>
            </>
        )
    }
}
