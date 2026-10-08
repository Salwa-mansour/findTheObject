
function ObjectsList({images,foundTargets}) {
  return (
    <ul className="objects-list">
      {

        images.map(image => {
           const isFound = foundTargets.some(target => target.id === image.id);
       return( 
        
         <li key={image.id}>
              <figure>
                <img src={image.iconPath} alt={image.name} /> 
              </figure>
            {isFound && <span className='check-span'>✔</span>}
          </li>)
        })
      }
    </ul>
  )
}

export default ObjectsList