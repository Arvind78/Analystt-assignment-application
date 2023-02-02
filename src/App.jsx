import React, { useState, useEffect } from 'react'
import Loading from './Loading';
import './App.css'
import UserDatails from './UserDatails'

function App() {
  const [data, setData] = useState([]);
  const [isLoading,setIsLoading]=useState(false)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((result) =>setData(result))
    setIsLoading(true)
  }, [])

  return (
    <div className="App">
      <div className='heading' >
        UserData Information Application
      </div>
      {
        (!isLoading)?<Loading/>:<UserDatails data={data} />
      }
   
    </div>
  )
}

export default App
