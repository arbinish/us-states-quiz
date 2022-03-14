function Report({ score, total, reset }) {
  return (
    <div className="report--wrapper">
     <h2 className="report--title">Score</h2>
    <div className="report">
      <p>{score}</p>
      <p className="total">{total}</p>
    </div>
     <button className="reset--game" title="start new game" onClick={reset}>Start</button>
    </div>
  )
}

export default Report;
