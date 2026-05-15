import { useState, useEffect } from 'react';

function Timer({ start }) {
  // 1. Calculate initial time elapsed so the timer doesn't start at 00:00 if there was a lag
  const calculateElapsed = () => {
    const startTime = new Date(start).getTime();
    const now = new Date().getTime();
    const difference = Math.max(0, now - startTime); // Ensure no negative numbers
    return Math.floor(difference / 1000); // Convert milliseconds to seconds
  };

  const [secondsElapsed, setSecondsElapsed] = useState(calculateElapsed);

  useEffect(() => {
    // 2. Set up an interval to update the timer every single second
    const intervalId = setInterval(() => {
      setSecondsElapsed(calculateElapsed());
    }, 1000);

    // 3. CRITICAL: Clean up the interval when the component unmounts (quitting the game)
    return () => clearInterval(intervalId);
  }, [start]);

  // 4. Helper function to format seconds into MM:SS
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    
    // Pad with leading zeros if single digits (e.g., 5 -> "05")
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');

    return `${paddedMinutes}:${paddedSeconds}`;
  };

  return (
    <div className="game-timer">
      <span>⏱️ {formatTime(secondsElapsed)}</span>
    </div>
  );
}

export default Timer;