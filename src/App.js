import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ restaurant, setRestaurant ] = useState([]);
  console.log(restaurant);
  
  useEffect(()=>{
    const getData = async () => {
      const response = await fetch(
        `https://devoretapi.co.uk/api/v1/website/getRestaurantContent/5f0c174d7c3bf80552f07947`
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
               item?.default?.map( time => <h6 key={time._id}>{time.opening_time} <br /> {time.closing_time} </h6> )
             }
           
         </div> 
        )
       }
      </header>
    </div>
  );
}

export default App;
