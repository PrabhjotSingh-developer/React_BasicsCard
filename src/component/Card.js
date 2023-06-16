import {useState} from 'react';
import './Card.css'
function Card({id,name,info,image,price,removeTour})
{
     const [readmore,setReadmore] = useState(false);
    const description = readmore ?info: `${info.substring(0,80)}.....`;
    function readmoreHandler()
    {
         setReadmore(!readmore);
    }
   
    return (
        <div className="card">
              <img src={image} className="image"></img>
              <div className="tourDetail">
                  <h4>{price}</h4>
                  <h4>{name}</h4>
              </div>
              <div className="description">
                    {description}
                    <span onClick={readmoreHandler}>
                         {readmore ? `show less` : `Read more`}
                    </span>
              </div>
            <button onClick = {()=>removeTour(id)}>Not interested</button>
             
        </div>
    )
}
export default Card;