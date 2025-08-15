import { addProgress } from '../state/progress'
import BackToBe from '../components/BackToBe'

export default function Connect(){
  return (
    <div className="card">
      <h2 className="title">Connect — חיבור</h2>
      <p>Global Message Capsule (UI בסיסי).</p>
      <button className="btn" onClick={()=>addProgress(5)}>שליחת מסר אוהב ( +5% )</button>
      <div style={{marginTop:16}}><BackToBe/></div>
    </div>
  )
}
