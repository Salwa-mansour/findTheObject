
function TargetSquier({position,show}) {
   console.log(position);
    const style = {
    opacity: show ? 1 : 0.5,
    pointerEvents: 'none',
    top: `${position?.y}%`,
    left: `${position?.x}%`,
    position: 'absolute',     // Necessary to move relative to the container
    transform: 'translate(-50%, -50%)', // Centers the square on the cursor
  
  };
  return (
    <div className="target-squier" style={style}>
        
    </div>
  )
}

export default TargetSquier