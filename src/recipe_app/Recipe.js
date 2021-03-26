import React from 'react'

 let Recipe=({Title,Calorie,Image})=> {
    return (
        <div className='col-md-3'>
            <div className='card'>
                    <div className='card-header'>
                         <h1>{Title}</h1>
                    </div>
                        
                    <div className='card-body'>
                         <img className='image' src={Image} alt='Wait'/>
                         <p>{Calorie}</p>
                        
                    </div>
            </div>  
        </div>
    );
}

export {Recipe};