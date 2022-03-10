import { useRef, useEffect, useState, useMemo } from 'react';
import Status from './status';

function Card({ states, updateScore }) {
  const textRef = useRef('');
  let renderCount = useRef(0)

  const [q, setQ] = useState(
    states[Math.round(Math.random() * 50)])

  const [status, setStatus] = useState(false)


  const randomQuestion = () => {
    setQ(states[Math.round(Math.random() * 50)])
    setStatus(false);
    textRef.current.value.toLowerCase() === q.capital.toLowerCase() ? updateScore(1) : updateScore(0);
    textRef.current.value = ''
  }

  useEffect(() => {
    renderCount.current += 1
    console.log('Card rendered', renderCount.current, 'times')
  })

  const handleFormSubmit = (e) => {
    e.preventDefault();
    randomQuestion()
  }


  const verifyHandler = (e) => {
    e.preventDefault();
    if (textRef.current.value.toLowerCase() === q.capital.toLowerCase()) {
      setStatus(true);
    }
  }


  return (
    <div className="card">
      <form onSubmit={handleFormSubmit}>
        <label>Name the capital city of {q.state}</label>
        <input type="text" ref={textRef} placeholder="capital city ..." onChange={verifyHandler}/>
         <Status prop={status}/>
      </form>
    </div>
  );
}

export default Card;
