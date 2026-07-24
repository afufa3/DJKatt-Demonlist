import './List.css'

export function List({ data, setActiveDemonId }) {
  return (
    <div className="demon-list-container">
      <h2>Choose a demon</h2>

      <ul className="demon-list">{data.map((demon, index) => {
        return (
          <li key={demon[0]} className="demon-item"
            onClick={() => setActiveDemonId(index)}>{demon.name}</li>
        )
      })}
      </ul>
    </div>

  )
}