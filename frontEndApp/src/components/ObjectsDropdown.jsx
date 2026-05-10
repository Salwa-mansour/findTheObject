import booksImg from '../assets/imageGroup1/books.jpg'
import catImg from '../assets/imageGroup1/cat.jpg'
import flowersImg from '../assets/imageGroup1/flowers.jpg'
import materImg from '../assets/imageGroup1/mater.jpg'

function ObjectsDropdown({position,show,setShow}) {
    // console.log(`show dropdown ${show}`);
    const style = {
        opacity: show ? 1 : 0.2,
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
           <li>
                <figure>
                    <img src={booksImg} alt="Books" />
                    <figcaption>Books</figcaption>
                    <span className='check-span'>✔</span>
                </figure>
           </li>
           <li>
                <figure>
                    <img src={catImg} alt="cat" />
                    <figcaption>cat</figcaption>
                </figure>
           </li>
           <li>
                <figure>
                    <img src={flowersImg} alt="flowers" />
                    <figcaption>flowers</figcaption>
                </figure>
           </li>
           <li>
                <figure>
                    <img src={materImg} alt="metar" />
                    <figcaption>metar</figcaption>
                </figure>
           </li>
        </ul>
 
  )
}

export default ObjectsDropdown