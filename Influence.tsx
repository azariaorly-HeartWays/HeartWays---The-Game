import { getProgress } from '../state/progress'
import BackToBe from '../components/BackToBe'

export default function Influence(){
  const unlocked = getProgress() >= 50
  return (
    <div className="card">
      <h2 className="title">Influence — השפעה</h2>
      {unlocked ? (
        <p>מוכנות להשפיע בעולם. נפתח ✅</p>
      ) : (
        <p>נפתח ב-50% התקדמות. מצב נוכחי: {getProgress()}%</p>
      )}
      <div style={{marginTop:16}}><BackToBe/></div>
    </div>
  )
}
