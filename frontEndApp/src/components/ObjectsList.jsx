import booksImg from '../assets/imageGroup1/books.jpg'
import catImg from '../assets/imageGroup1/cat.jpg'
import flowersImg from '../assets/imageGroup1/flowers.jpg'
import materImg from '../assets/imageGroup1/mater.jpg'

// A:\jslearning\Node.js-TheOdin\findTheObject\frontEndApp\src\assets\imageGroup1\cat.jpg
// frontEndApp\src\assets\imageGroup1\flowrs.jpg
function ObjectsList() {
  return (
    <ul className="objects-list">
        <li><img src={booksImg} alt="books" /></li>
        <li><img src={catImg} alt="cat" /></li>
        <li><img src={flowersImg} alt="flowers" /></li>
        <li><img src={materImg} alt="mater" /></li>
    </ul>
  )
}

export default ObjectsList