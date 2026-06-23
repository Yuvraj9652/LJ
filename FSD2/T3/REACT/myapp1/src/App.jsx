import React, { useState, useEffect } from 'react';
const App = () => {
    const [seconds, setSeconds] = useState(0);
//   useEffect(() => {
//     setInterval(() => {
//       setSeconds(prevSeconds => prevSeconds + 1);
//     }, 1000);
// },[])
useEffect(() => {
  const id = setInterval(() => {
    console.log(Date.now());
    setSeconds(prev => prev + 1);
  }, 1000);

  // return () => clearInterval(id);
}, []);
  return (
    <div> <p>Seconds: {seconds}</p> </div>
  ) }
export default App