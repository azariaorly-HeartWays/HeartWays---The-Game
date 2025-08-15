import { getProgress } from '../state/progress'

export default function Progress(){
  const pct = getProgress()
  return (
    <div className="card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}>
        <h3 className="title">מד התקדמות</h3>
        <div className="mono">{pct}%</div>
      </div>
      <div className="progress"><span style={{width:`${pct}%`}} /></div>
      <div className="mono">אבני דרך: פתיחת שערים, יצירה, חיבורים</div>
    </div>
  )
}
