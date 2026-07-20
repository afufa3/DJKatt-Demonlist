import './DemonInfo.css'
import EasyDemon from '../assets/EASY DEMON.png'
import MediumDemon from '../assets/MEDIUM DEMON.png'
import HardDemon from '../assets/HARD DEMON.png'
import InsaneDemon from '../assets/INSANE DEMON.png'
import ExtremeDemon from '../assets/EXTREME DEMON.png'

export function DemonInfo({ data, demon }) {
  const checkForData = (index) => {
    return data[demon][index] === "" ? "No data" : data[demon][index]
  }

  const checkDifficulty = () => {
    switch (data[demon][1]) {
      case "Extreme":
        return ExtremeDemon
      case "Insane":
        return InsaneDemon
      case "Hard":
        return HardDemon
      case "Medium":
        return MediumDemon
      case "Easy":
        return EasyDemon
      default:
        return "шо бля"
    }
  }

  const parseVideoId = () => {
    const url = data[demon][8]
    let result = ""

    for (let i = url.length; i > 0; i--) {
      if (url[i] === "=") {
        break
      }
      else {
        result += url[i]
      }
    }

    return result.split("").reverse().join("").slice(0, 11)
  }

  if (!data || data.length === 0) {
    return <div className="background"><div className="main-info">Loading demon info...</div></div>;
  }

  return (
    <>
      <div className="background">
        <div className='main-info'>
          <div className='upper-half'>
            <div className='yt-player'>
              
              <iframe className='player' width="560" height="315" src={`https://www.youtube.com/embed/${parseVideoId()}?si=ailRhy4tHG1OTZ4L`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className='text-info'>
              <div className='title'>
                <h2>{checkForData(3)}</h2>
                <p>by {checkForData(4)}</p>
              </div>
              <div className='difficulty'>
                <img className='diff-img' src={checkDifficulty()} />
                <p>{checkForData(1)}<br></br> Demon</p>
              </div>
            </div>
          </div>
          <div className='lower-half'>
            <div className='enjoyment'>
              <h3>Attempts</h3>
              <p>{checkForData(7)}</p>
            </div>
            <div className='date'>
              <h3>Date</h3>
              <p>{checkForData(6)}</p>
            </div>
            <div className='attempts'>
              <h3>Enjoyment</h3>
              <p>{checkForData(5)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}