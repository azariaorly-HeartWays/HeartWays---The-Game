import { addProgress } from '../state/progress'
import BackToBe from '../components/BackToBe'

export default function Create(){
  return (
    <div className="card">
      <h2 className="title">Create — יצירה</h2>
      <p>כתיבה/מוזיקה/אמנות — שמירה ל-Heart Album בהמשך.</p>
      <button className="btn" onClick={()=>addProgress(10)}>פעולת יצירה ( +10% )</button>
      <div style={{marginTop:16}}><BackToBe/></div>
    </div>
  )
}
