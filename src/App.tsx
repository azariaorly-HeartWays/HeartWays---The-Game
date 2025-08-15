import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Progress from './components/Progress'
import Be from './routes/Be'
import Play from './routes/Play'
import Create from './routes/Create'
import Connect from './routes/Connect'
import Influence from './routes/Influence'
import Keter from './routes/Sefirot/Keter'
import Chokhma from './routes/Sefirot/Chokhma'
import Bina from './routes/Sefirot/Bina'
import Chesed from './routes/Sefirot/Chesed'
import Gevurah from './routes/Sefirot/Gevurah'
import Tiferet from './routes/Sefirot/Tiferet'
import Netzach from './routes/Sefirot/Netzach'
import Hod from './routes/Sefirot/Hod'
import Yesod from './routes/Sefirot/Yesod'
import Malkhut from './routes/Sefirot/Malkhut'
import flows from './config/flows.json'
import content from './config/content.json'
import rules from './config/rules.json'
import { getProgress } from './state/progress'

export default function App(){
  const [p,setP] = useState(getProgress())
  useEffect(()=>{
    const id = setInterval(()=> setP(getProgress()), 400)
    return ()=>clearInterval(id)
  },[])

  const unlockedInfluence = p >= (rules as any).unlockInfluenceAt

  return (
    <div className="container">
      <header className="header">
        <h1>HeartWays</h1>
        <nav style={{display:'flex',gap:8,flexWrap:'wrap'}}>
          {(flows as any).entryButtons.map((b:any)=>(
            <Link key={b.path} to={b.path}>
              <button className="btn" disabled={b.label==='Influence' && !unlockedInfluence}>
                {b.label}
              </button>
            </Link>
          ))}
          <Link to="/s/keter"><button className="btn">10 הספירות</button></Link>
        </nav>
      </header>

      <main style={{marginTop:16}} className="grid">
        <section className="card">
          <h2 className="title">פתיחה</h2>
          <p>{(content as any).intro}</p>
        </section>

        <Progress />

        <Routes>
          <Route path="/" element={<Be/>} />
          <Route path="/be" element={<Be/>} />
          <Route path="/play" element={<Play/>} />
          <Route path="/create" element={<Create/>} />
          <Route path="/connect" element={<Connect/>} />
          <Route path="/influence" element={<Influence/>} />
          {/* Sefirot */}
          <Route path="/s/keter" element={<Keter/>} />
          <Route path="/s/chokhma" element={<Chokhma/>} />
          <Route path="/s/bina" element={<Bina/>} />
          <Route path="/s/chesed" element={<Chesed/>} />
          <Route path="/s/gevurah" element={<Gevurah/>} />
          <Route path="/s/tiferet" element={<Tiferet/>} />
          <Route path="/s/netzach" element={<Netzach/>} />
          <Route path="/s/hod" element={<Hod/>} />
          <Route path="/s/yesod" element={<Yesod/>} />
          <Route path="/s/malkhut" element={<Malkhut/>} />
        </Routes>
      </main>
    </div>
  )
}
