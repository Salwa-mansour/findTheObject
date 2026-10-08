// data/levels.js
import level1Img from '../assets/imageGroup1/findTheObject1_1.jpg';
import booksImg from '../assets/imageGroup1/books.jpg'
import catImg from '../assets/imageGroup1/cat.jpg'
import flowersImg from '../assets/imageGroup1/flowers.jpg'
import materImg from '../assets/imageGroup1/mater.jpg'

export const levels = [
  {
    id: 1,
    title: "The Busy Library",
    difficulty: "Easy",
    mainImage: level1Img,
    targets: [
      { 
        id: 'cat_1', 
        name: 'Sleeping Cat', 
        icon: catImg, 
        targetX: 12.5, 
        targetY: 34.0,
        radius: 4
      },
        {
        id: 'books_1',
        name: 'Stack of Books',
        icon: booksImg,
        targetX: 45.0,
        targetY: 60.0,
        radius: 4
        },
        {
        id: 'flowers_1',
        name: 'Vase of Flowers',
        icon: flowersImg,
        targetX: 70.0,
        targetY: 20.0,
        radius: 4
        },
        {
        id: 'mater_1',
        name: 'Toy Car',
        icon: materImg,
        targetX: 85.0,
        targetY: 80.0,
        radius: 4
        }
    ]
  }
];

export default levels ;