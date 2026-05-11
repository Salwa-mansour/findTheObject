// import booksImg from '../assets/imageGroup1/books.jpg'
// import catImg from '../assets/imageGroup1/cat.jpg'
// import flowersImg from '../assets/imageGroup1/flowers.jpg'
// import materImg from '../assets/imageGroup1/mater.jpg'

function ObjectsDropdown({images,position,show,setShow}) {
    // console.log(`show dropdown ${show}`);
    const style = {
        opacity: show ? 1 : 0.4,
        PointerEvent: show ? 'auto' : 'none',
        top: `${position.y}%`,  
        left: `${position.x}%`,
        transform: 'translate(0,1.5rem)', 
        zIndex: 20, 
    };
    function handleClick() {
        setShow(false);
    }
  return (
 
        <ul className='object-dropdown' style={style} onClick={handleClick}>
           {/* <li>
                <figure>
                    <img src={booksImg} alt="Books" />
                    <figcaption>Books</figcaption>
                    <span className='check-span'>✔</span>
                </figure>
           </li>
          */}
        {
            images.map(image => (
                <li key={image.id}>
                    <figure>
                        <img src={image.icon} alt={image.name} />
                        <figcaption>{image.name}</figcaption>
                        <span className='check-span'>✔</span>  
                    </figure>
                </li>
            ))
        }
        </ul>
 
  )
}

export default ObjectsDropdown