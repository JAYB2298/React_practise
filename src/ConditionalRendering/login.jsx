import React, { Component } from 'react'

export default class login extends Component {
    constructor(props){
        super(props);
            this.state= {
                message:'',
                islogin:false
            }
        }
    
    loginn=()=>{
       
        let message="welcome to react";
        this.setState({
            message:message,
            islogin: !this.state.islogin
        });
        
    }

    logout=()=>{
        this.setState({
            ...this.state,
            message:"bye",
            islogin:!this.state.islogin
        });
        
    }
    render() {
        if(this.state.islogin){
        }
        return (
            <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8'>
                        <div className='card'></div>
                        <div className='card-header'></div>
                        <div className='card-body'>
                           <h1 className='mb-4'>{this.state.message}</h1>
                           {!this.state.islogin? <button className='btn btn-primary mr-2' onClick={this.loginn}>Login</button>
                           : <button className='btn btn-danger' onClick={this.logout}>Logout</button>
                           }
                         </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
