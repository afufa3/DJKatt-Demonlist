import KattPfp from '../assets/DJKatt-pfp.png'
import './Header.css'

export function Header() {
  return (
    <header className="header">
      <a href="https://www.twitch.tv/djkattt_"><img src={KattPfp} /></a>
      <div className='title'>
        <h1>DJKatt's Demonlist</h1>
        <p>Feel the dih</p>
      </div>
    </header>
  )
}