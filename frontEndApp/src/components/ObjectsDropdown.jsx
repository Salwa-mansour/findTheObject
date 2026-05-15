
import axios from "axios";
function ObjectsDropdown({images,position,show,setShow,foundTargets,setFoundTargets}) {
    // console.log(`show dropdown ${show}`);
    const style = {
        opacity: show ? 1 : 0.4,
        PointerEvent: show ? 'auto' : 'none',
        top: `${position.y}%`,  
        left: `${position.x}%`,
        transform: 'translate(0,1.5rem)', 
        zIndex: 20, 
    };
    function handleClick(e) {
        console.log(e.target);
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
                    <figure >
                        <img src={image.iconPath} alt={image.name} />
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