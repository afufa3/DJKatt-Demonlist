import { useEffect } from 'react';
import './components/List.jsx'
import './App.css'
import { useState } from 'react';
import { List } from './components/List.jsx';
import { DemonInfo } from './components/DemonInfo.jsx';
import { Header } from './components/Header.jsx';

function App() {
  const [data, setData] = useState([])
  const [activeDemonId, setActiveDemonId] = useState(0)

  useEffect(() => {
    const SPREADSHEET_ID = '1Fg5vYYC24SyM27H4N7tFdD82wESDu3FuvU57mGNK7EI';
    const API_KEY = 'AIzaSyAV9X0JVdPROM9Ul7VThwbOg9Ocw6m8cbw';
    const SHEET_NAME = 'The Completions list';

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`

    fetch(url)
      .then(res => res.json())
      .then((data) => {
        const demons = data.values
          .filter(row => row[3] !== 'Level')
          .map(row => ({
            id: row[0],
            difficulty: row[1],
            name: row[3],
            creator: row[4],
            enjoyment: row[5],
            date: row[6],
            attempts: row[7],
            videoUrl: row[8],
          }));
        setData(demons);
      })
      .catch(err => console.error(err));
  }, []);



  return (
    <>
      <Header />
      <div className='main'>
        <List data={data} setActiveDemonId={setActiveDemonId} setData={setData} />
        <DemonInfo data={data} demon={activeDemonId} />
      </div>
    </>
  )
}

export default App
