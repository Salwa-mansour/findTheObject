import booksImg from '../assets/imageGroup1/books.jpg'
import catImg from '../assets/imageGroup1/cat.jpg'
import flowersImg from '../assets/imageGroup1/flowers.jpg'
import materImg from '../assets/imageGroup1/mater.jpg'


function ObjectsList() {
  return (
    <ul className="objects-list">
        <li>
          <img src={booksImg} alt="books" />
         <span className='check-span'>✔</span>
        </li>
        <li>
          <img src={catImg} alt="cat" />
          <span className='check-span'>✔</span>
         </li>
        <li>
          <img src={flowersImg} alt="flowers" />
          <span className='check-span'>✔</span>
         </li>
        <li>
          <img src={materImg} alt="mater" />
          <span className='check-span'>✔</span>
         </li>
    </ul>
  )
}

export default ObjectsList