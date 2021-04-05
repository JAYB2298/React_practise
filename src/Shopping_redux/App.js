import React, { Component } from 'react'
import {Provider} from 'react-redux'
import {Store} from './store/store'
import {View} from './view/view'
export default class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <View/>    
            </Provider>   
        )
    }
}
