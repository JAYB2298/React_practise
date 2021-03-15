import React, { Component } from 'react'
import {CustomerData} from './data'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            employee: CustomerData
        };
    }
    render() {
        return (
        <>    
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <p className='h2 text-sucess'>Employee List</p>
                        <p className="lead">
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. 
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <table className='table table-hover text-center table-stripped table-success'>
                            <thead className='bg-primary text-bold text-black'>
                                <tr>
                                <th>Employee</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Age</th>
                                <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.employee.map((employee)=>{
                                    return(
                                        <tr>
                                            <td>{employee.login.uuid}</td>
                                            <td>{employee.name.first}</td>
                                            <td><img src={employee.picture.medium} 
                                                     width='70' 
                                                     height='70'/>
                                            </td>
                                            <td>{employee.registered.age}</td>
                                            <td>{employee.location.city}</td>
                                        </tr>
                                          );
                                     }
                                   )
                               }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
             
        </>   
        )
    }
}


