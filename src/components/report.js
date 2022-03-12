function Report({ score, total }) {
  return (
    <>
     <h2 className="report--title">Score</h2>
    <div className="report">
      <p>{score}</p>
      <p className="total">{total}</p>
    </div>
    </>
  )
}

export default Report;
