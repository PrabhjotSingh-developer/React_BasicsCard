
import {useState} from 'react';
import './App.css';
import Tours from './component/Tours'
import data from './component/data'
function App() {

   const [tours,setTours] = useState(data);

   function removeTour(id)
   {
       const newTours = tours.filter(tour => tour.id !== id)
       setTours(newTours);
   }
   if(tours.length === 0)
   {
       return (
          <div className="refresh">
                <h2>No tours left</h2>
                <button onClick={()=>setTours(data)}>Refresh</button>
          </div>
       )
   }
  return (
    <div className="App">
          <h2>Project with Prabh</h2>
          {/* console.log({tours}) */}
          <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
