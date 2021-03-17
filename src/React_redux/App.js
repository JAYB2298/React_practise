import React, { Component } from 'react'
import {Wishmessage} from './components/wish/wish'
import {Store} from './wish/store'
import {Provider} from 'react-redux'
export class App extends Component {
    render() {
        return (
            <div>
                <nav className="nav navbar-dark bg-dark">
                    <a href='/'>React Redux</a>
                </nav>
                <Provider store={Store}>
                <Wishmessage/>
                </Provider>
            </div>
        )
    }
}

export default App
