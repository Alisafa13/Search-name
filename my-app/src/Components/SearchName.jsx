import React from 'react'
import {useState, useEffect} from 'react'
const SearchName = () => {
      const [searchMyData, setSearchMyData] = useState("")

    const searchData = (e) =>{
      setSearchMyData(e.target.value.toLowerCase())
    }

      const [resultData, setResultData] = useState([])
      useEffect(()=>{
        fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood')
        .then(res=>res.json())
        .then(data=>{
          setResultData(data)
        })
      },[])
      return (
        <div>
    

        <input type='text' placeholder='search' onChange={searchData}/>
    
        {
          resultData.filter(e => e.name.toLowerCase().includes(searchMyData)).map((a,b)=>(
            <div key={b}>
            <h1>{a.name}</h1>
            <h5>{a.department}</h5>
            <h5>{a.role}</h5>
          </div>
          ))
        }

       </div>
       
      );
    }
    

export default SearchName