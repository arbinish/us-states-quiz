
function Score({score}) {
  return (
    <div className="score">
      { score.total > 0 && <>
      <label>Score</label>
        <label>{score.score}/{score.total}</label> </>}
    </div>
  );
}

export default Score;
