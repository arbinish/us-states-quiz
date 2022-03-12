import { useRef, useEffect, useState } from 'react';
import Status from './status';


function Card({ states, updateScore }) {
  const textRef = useRef('');
  let renderCount = useRef(0);
  const history = useRef([]);
  const maxLength = states.length - 1;

  const getRandomQuestion = () => {
    if (history.current.length === (maxLength-1)) {
      history.current.splice(0, history.current.length)
    }

    let n = Math.round(Math.random() * maxLength)
    while (history.current.indexOf(n) !== -1) {
      n = Math.round(Math.random() * maxLength)
    }
    history.current.push(n)
    return states[n]
  }

  const [q, setQ] = useState(getRandomQuestion())

  const [status, setStatus] = useState(null)

  const randomQuestion = () => {
    setQ(getRandomQuestion())
    setStatus(null)
  }

  useEffect(() => {
    textRef.current.focus()
  }, [])

  useEffect(() => {
    renderCount.current += 1
    console.log('Card rendered', renderCount.current, 'times')
  })

  const handleFormSubmit = (e) => {
    e.preventDefault();
    textRef.current.value.toLowerCase() === q.capital.toLowerCase() ? updateScore(1) : updateScore(0);
    textRef.current.value = ''
    randomQuestion()
  }


  const verifyHandler = (e) => {
    e.preventDefault();
    if (textRef.current.value.length === 0) {
      setStatus(null)
      return
    }
    if (textRef.current.value.length === 1) {
      setStatus(false)
      return
    }
    if (textRef.current.value.toLowerCase() === q.capital.toLowerCase()) {
      setStatus(true)
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
