import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ sidebarList, setSidebarList ] = useState([]);
  console.log(sidebarList);
  
  useEffect(()=>{
    const getData = async () => {
      const response = await fetch(
        `https://api-test-react.vercel.app/website/findCategoryAndProducts?isActive=true&storeId=1-2021`
      );
      const data = await response.json();
      setSidebarList(data);
    };
    getData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
       {
         sidebarList?.categories?.map(item => <li key={item._id}>{item.categoryName}</li>)
       }
      </header>
    </div>
  );
}

export default App;
