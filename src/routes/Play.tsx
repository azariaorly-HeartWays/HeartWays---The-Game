import { addProgress } from '../state/progress'
import BackToBe from '../components/BackToBe'

export default function Play(){
  return (
    <div className="card">
      <h2 className="title">Play — Inner Lab</h2>
      <p>משחק קצר למיקוד עדין. לחצי כדי לצבור התקדמות.</p>
      <button className="btn" onClick={()=>addProgress(10)}>משחק מיקוד ( +10% )</button>
      <div style={{marginTop:16}}><BackToBe/></div>
    </div>
  )
}
