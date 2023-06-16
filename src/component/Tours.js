// import { useState } from 'react';
import Card from './Card.js'
import './tour.css'


function Tours({tours, removeTour})
{
    return(
       <div className='container'>
     
            {
               tours.map((tour)=>{
                    return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                })
            }
       </div>
    );
}
export default Tours;