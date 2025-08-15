import BackToBe from '../components/BackToBe'
import { addProgress, getProgress } from '../state/progress'

export default function Be(){
  return (
    <div className="card">
      <h2 className="title">Be — חיבור פנימי</h2>
      <p>נשימה עדינה, מודעות, איזון. לחצי להתחלה ונתקדם במסע.</p>
      <div style={{display:'flex',gap:12,marginTop:12}}>
        <button className="btn" onClick={()=>addProgress(10)}>תרגול נשימה ( +10% )</button>
        <button className="btn" onClick={()=>addProgress(5)}>התבוננות שקטה ( +5% )</button>
      </div>
      <div className="mono" style={{marginTop:8}}>התקדמות נוכחית: {getProgress()}%</div>
      <div style={{marginTop:16}}><BackToBe/></div>
    </div>
  )
}
