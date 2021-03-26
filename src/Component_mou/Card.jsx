import React, { Component } from 'react'

export default class Card extends Component {
    /* constructor(props){
        super(props);
    } */
    
    render() {
        
        let {selectedContact}=this.props;
        return (
            <>
             {selectedContact!=null?
             (<div className='container'>
                <div className='row'>
                    <div className="col">
                         <div className='card '>
                             <div className='card-header'>
                                 
                                 <p className="h5">Detailed Contact</p>
                                 <img src={selectedContact.picture.medium}/>
                             </div>
                             <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        Name: {selectedContact.name.last}
                                    </li>
                                    <li className="list-group-item">
                                        Email: {selectedContact.email}
                                    </li>
                                    <li className="list-group-item">
                                        Sex: {selectedContact.gender}
                                    </li>
                                    <li className="list-group-item">
                                        Age: {selectedContact.dob.age}
                                    </li>
                                    <li className="list-group-item">
                                         {selectedContact.location.city}
                                    </li>
                                 </ul>
                            </div>
                         </div>
                    </div>      
                </div>
            </div> )
            :null}
            </>
        )
    }
}
