
function ObjectsList({images}) {
  return (
    <ul className="objects-list">
      {
        images.map(image => (
          <li key={image.id}>
            <img src={image.icon} alt={image.name} /> 
            <span className='check-span'>✔</span>
          </li>
        ))
      }
    </ul>
  )
}

export default ObjectsList