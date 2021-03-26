import React, { Component } from 'react'
import Axios from "axios";
import Contact from './contact'
import Card from './Card'

export default class Contact_App extends Component {
    constructor(props){
        super(props);
        this.state={
            contacts:null,
            error:null,
            selectCont:null
        };
    }
    
    pullData=(contact)=>{
        console.log("string is texting",contact)
        this.setState({
            selectCont:contact
        });
    }; 
    
    componentDidMount(){
        let URL= "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";
        Axios.get(URL)
        .then((Response)=>{
            this.setState({
                contacts:Response.data
            });
        })
        .catch((err)=>{
            this.setState({
                errMessage:err
            });
        });
    }
    render() {
        return (
            <>
            <h1>Contact App</h1>
            <div className='container'>
                <div className='row '>
                    <div className='col-md-8'>
                    {this.state.contacts!=null?( <>
                    <Contact 
                        pullData={this.pullData}
                        contacts={this.state.contacts}/>
                        </>):null}
                    </div>
                    <div className='col-md-4 '>
                        <Card selectedContact={this.state. selectCont}></Card>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
