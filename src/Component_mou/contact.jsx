import React, { Component } from 'react'

export default class contact extends Component {
    constructor(props){
        super(props);
    }
    clickcon=(contact)=>{
        this.props.pullData(contact);
        console.log(contact)
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <table className='table table-hover table-striped'>
                            <thead className='bg-primary'>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.contacts!=null?(
                                 <>
                                {this.props.contacts.map((contact)=>{
                                    return(
                                        <tr onMouseOver={this.clickcon.bind(this,contact)}>
                                            <td>{contact.login.uuid}</td>
                                            <td>{contact.name.last}</td>
                                            <td>{contact.dob.age}</td>
                                            <td>{contact.email}</td>
                                        </tr>
                                    );
                                })}
                                </>)
                                :null}
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        )
    }
}
