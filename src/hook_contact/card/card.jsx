import React from 'react'

function Card({selectContact}) {
    return (
    <>
    {selectContact!=null?(
        <div className='container'>
          <div className='row'>
            <div className='col'>
            {console.log(selectContact)}
                <div  className='card'>
                    <div className='card-header'>
                        <img src={selectContact.picture.medium}></img>
                    </div>
                    <div className='card-body'>
                        <ul>
                            <li className="list-group-item">
                                Name: {selectContact.name.last}
                            </li>
                            <li className="list-group-item">
                                Email: {selectContact.email}
                            </li>
                            <li className="list-group-item">
                                 Sex: {selectContact.gender}
                            </li>
                            <li className="list-group-item">
                                 Age: {selectContact.dob.age}
                            </li>
                            <li className="list-group-item">
                                Location: {selectContact.location.city}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        </div>
    ):null}
    </>    
    )
}

export default Card
