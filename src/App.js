import './App.scss';
import states from './states-capital.json';
import Score from './components/score';
import Card from './components/card';
import Report from './components/report';
import ScoreStats from './components/scorestats';
import { useRef, useEffect, useReducer, useState } from 'react';


function App() {

  const [showStats, setShowStats] = useState(false)

  const statsRef = useRef([])

  const [grade, gradeDispatch] = useReducer((state, action) => {
    if (action.type === 'INC') {
      return {...state, score: state.score + 1, total: state.total + 1}
    }
    if (action.type === 'RESET') {
      return { score: 0, total: 0, attempt: state.attempt + 1 }
    }
    return {...state, score: state.score, total: state.total + 1}
  }, { score: 0, total: 0, attempt: 1 })

  const renderCount = useRef(1)

  const updateScore = (num) => {
    num === 0 ? gradeDispatch({type: 'NONE'}) : gradeDispatch({type: 'INC'})
  }

  useEffect(() => {
    console.log('App rendered', renderCount.current, 'times. statsRef', statsRef.current)
  
    renderCount.current += 1
  })

  const scoreReset = () => {
    gradeDispatch({type: 'RESET'})
  }

  useEffect(() => {
    if (grade.total >= 10)
      statsRef.current.push(parseInt(grade.score * 100/ grade.total))
  }, [grade])

  const displayStats = () => {
    setShowStats(!showStats)
    console.log('stats', statsRef.current)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>US States Quiz</h3>
        { grade.attempt > 1 && <h4 className='stats' title="show statistics" onClick={displayStats}>Stats</h4> }
      </header>
      {showStats && <ScoreStats stats={statsRef.current} dismiss={displayStats} />}
      { grade.total >= 10 ? (
        <Report score={grade.score} total={grade.total} reset={scoreReset} />)  :
         <>
          <Card states={states} updateScore={updateScore}/>
          <Score score={grade}/>
        </>
      }
    </div>
  );
}

export default App;
