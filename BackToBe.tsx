import { useNavigate } from 'react-router-dom'
export default function BackToBe(){
  const nav = useNavigate()
  return <button className="btn" onClick={()=>nav('/be')}>⬅ חזרה ל-Be</button>
}
