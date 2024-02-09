import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState({});

  useEffect(() => {


    const apiUrl = 'https://practice-2-psi.vercel.app/';

    axios.get(apiUrl)
    .then((response) => {
      console.log("Successful GET request: ", response)
      setData(prev => ({...prev, getData: response.data}))
    })
    .catch((error) => console.error("Error while making GET request", error))

    axios.post(apiUrl)
    .then((response) => {
      console.log("Successful POST request: ", response)
      setData(prev => ({...prev, postData: response.data}))
    })
    .catch((error) => console.error("Error while making POST request", error))

  }, [])

  return (
    <div>
      <h1>APP</h1>
      <p>GET DATA: {data.getData}</p>
      <p>POST DATA: {data.postData}</p>
    </div>
  )
}

export default App