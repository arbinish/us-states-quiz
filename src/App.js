import './App.scss';
import states from './states-capital.json';
import Score from './components/score';
import Card from './components/card';
import { useState, useRef, useEffect, useMemo, useReducer } from 'react';


function App() {

  const [grade, gradeDispatch] = useReducer((state, action) => {
    if (action.type === 'INC') {
      return {score: state.score + 1, total: state.total + 1}
    }
    return {score: state.score, total: state.total + 1}
  }, { score: 0, total: 0 })

  const renderCount = useRef(1)

  const updateScore = (num) => {
    num === 0 ? gradeDispatch({type: 'NONE'}) : gradeDispatch({type: 'INC'})
  }

  useEffect(() => {
    console.log('App rendered', renderCount.current, 'times')
    renderCount.current += 1
  })

  const fn = useMemo(() => updateScore, [])


  return (
    <div className="App">
      <header className="App-header">
        <h3>US States Quiz</h3>
      </header>
      <Card states={states} updateScore={fn}/>
      <Score score={grade}/>
    </div>
  );
}

export default App;
