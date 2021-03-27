import React from 'react'
import Navbar from './Navbar'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Hook from '../hook_contact/App'
import Recipe from '../recipe_app/App'
import Table from '../table_building/App'
import Boot from '../bootstrap/App'


export default function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path='/RecipeApp' component={Recipe}/>
                    <Route path='/Contactdata' component={Hook}/>
                    <Route path='/Table' component={Table}/>
                    <Route path='/Boot' component={Boot}/>


                </Switch>
            </Router>
        </>
    )
}
