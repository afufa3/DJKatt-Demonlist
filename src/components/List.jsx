import './List.css'

export function List({ data, setActiveDemonId }) {
  return (
    <div className="demon-list-container">
      <h2>Choose a demon</h2>

      <ul className="demon-list">{data.map((demon, index) => {
        if (demon[3] !== 'Level') {
          return (
            <li key={demon[0]} className="demon-item"
              onClick={() => setActiveDemonId(index)}>{demon[3]}</li>
          )
        }
      })}
      </ul>
    </div>

  )
}