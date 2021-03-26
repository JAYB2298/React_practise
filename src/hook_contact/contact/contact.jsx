import React from 'react'

export default function Contact({contact,pulldata}) {
    
    let onover=(contact)=>{
           pulldata(contact);
           }
    
    return (
        <div className='container'>
            <div className='row'>
                <div className="col">
                    <table className='table table-hover table-stripped text-white'>
                        <thead className='bg-dark'>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody className='text-white bg-dark'>
                            {contact!=null?(<>
                                {contact.map((contact)=>{
                                return(
                                <tr 
                                key={contact.login.uuid}
                                onClick={onover.bind(this,contact)}>
                                <td>{contact.login.uuid}</td>
                                <td>{contact.name.last}</td>
                                <td>{contact.dob.age}</td>
                                <td>{contact.email}</td>
                                </tr>);
                            })}
                            </>):null}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}