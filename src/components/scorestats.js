function ScoreStats({ stats, dismiss }) {
    if (stats.length < 1) {
        return <></>
    }
    return (
        <div className="score-stats">
            <ul>
                {stats.map( (d, i ) => <li key={i}><span class="score-index">{i+1}.</span><span class="score-val">{d}<label> %</label></span></li> )}
            </ul>

            <span className="close-stats" title="close" onClick={dismiss}>✗</span>
        </div>
    )
}


export default ScoreStats;