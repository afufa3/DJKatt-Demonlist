import { useEffect } from 'react';
import './components/Test.jsx'
import './App.css'
import { useState } from 'react';
import { Test } from './components/Test.jsx';

function App() {


  const [data, setData] = useState([])

  useEffect(() => {
    const SPREADSHEET_ID = '1Fg5vYYC24SyM27H4N7tFdD82wESDu3FuvU57mGNK7EI';
    const API_KEY = 'AIzaSyAV9X0JVdPROM9Ul7VThwbOg9Ocw6m8cbw';
    const SHEET_NAME = 'The Completions list';

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`

    fetch(url)
      .then(res => res.json())
      .then(data => setData(data.values))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      
      <Test data={data} />
    </>
  )
}

export default App
