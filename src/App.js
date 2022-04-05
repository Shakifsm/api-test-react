import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ restaurant, setRestaurant ] = useState([]);
  console.log(restaurant);
  
  useEffect(()=>{
    const getData = async () => {
      const response = await fetch(
        `https://devoretapi.co.uk/api/v1/website/getRestaurantContent/61b6fa7db0f0f8e3bc44c7d9`
      );
      const data = await response.json();
      setRestaurant(data);
    };
    getData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
       {/* {
         sidebarList?.categories?.map(item => <li key={item._id}>{item.categoryName}</li>)
       } */}
       <h1>{restaurant?.restaurant_data?.restaurant_name}</h1>
       {
         restaurant?.restaurant_data?.schedule.map( item =>
         <div key={item._id}>
           <h6>{item.day_name}</h6>
           
             {
               item?.default?.map( time =>
               <div key={time._id}>
                 <h5>Shift : {time.shift_name}</h5>
                 <h6>Opening Time : {time.opening_time} <br /> Closing Time : {time.closing_time} </h6>
               </div>
               )
             }
           
         </div> 
        )
       }
      </header>
    </div>
  );
}

export default App;
