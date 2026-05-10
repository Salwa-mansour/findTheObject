import { useState } from 'react';
import mainImg from '../assets/imageGroup1/findTheObject1_1.jpg';
import TargetSquier from './TargetSquier';
import ObjectsDropdown from './ObjectsDropdown';
function Image1() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [dropDownPosition, setDropDownPosition] = useState({ x: 0, y: 0 });
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  function mouseMoveHandler(e) {
  //  const x = e.nativeEvent.offsetX;
  //   const y = e.nativeEvent.offsetY;
  //   setCoords({ x, y });
  
  const { width, height } = e.currentTarget.getBoundingClientRect();
  
  // Calculate percentage (0 to 100)
  const xPercent = ((e.nativeEvent.offsetX / width) * 100).toFixed(2);
  const yPercent = ((e.nativeEvent.offsetY / height) * 100).toFixed(2);
  
  setCoords({ x: xPercent, y: yPercent });
  }
  function clickHandler(e) {
  
    if (!showDropdown) {
    setShowDropdown(true);
    }
    setDropDownPosition({ x: coords.x, y: coords.y });
  }
  return (
    <>
    <span>-----{coords.x} , {coords.y}</span>
   
    <section className="img-container"
      onMouseMove={mouseMoveHandler}
      onClick={clickHandler}
      onMouseEnter={() => setShowCursor(true)}
      onMouseLeave={() => setShowCursor(false)}
    >
        <img src={mainImg} alt="find items" />
       
        <TargetSquier  position ={coords} show ={showCursor}/>
        <ObjectsDropdown position={dropDownPosition} show={showDropdown} setShow={setShowDropdown} />
    </section>
     </>
  )
}

export default Image1 