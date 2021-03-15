import React from 'react';
import imgone from "../../images/image2.jpeg";
import imgtwo from "../../images/image8.jfif";
import imgthree from "../../images/image7.jpg";
import imgfour from "../../images/image5.jpg";

let Cards=()=>{
    let cardDetails=[
        {image:imgone,Title:'Paris'},
        {image:imgthree,Title:'Hawaii'},
        {image:imgtwo,Title:'Sydney'},
        {image:imgfour,Title:'New-york'}
  ];

  let cardRender=(card,index)=> {
      return(
  
      
          <div className="col-md-3" key={index}>
             <div className="card">
                <img src={card.image} alt="" className='image'/>
                <div className="card-body text-center">
                    <h2>{card.Title}</h2>
                    <p>More About</p>
                    <button className="btn btn-primary">Book Now</button>
                </div>
              </div>
          </div>
    
    )
    }
    return <>
    <div className="container mt-4">
        <div className="row">
            {cardDetails.map(cardRender)}
        </div>
    </div>
    </>
}

export default Cards;