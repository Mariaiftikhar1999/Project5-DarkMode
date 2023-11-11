import React , {useState,useEffect} from 'react'

const App = () => {
  const [mode, setMode] = useState("light")
  const Mode=()=>{
    mode == "light" ? setMode("dark"):setMode("light")


   
  }
  useEffect(()=>{
    document.body.className=mode
  },[mode])
  return (
    <>
    <nav>
      <h1>darkMode</h1>
    {
      mode !== "light"? 
      <button onClick={Mode}>
        enabel light mode
      </button>:
      <button onClick={Mode}>
      enable dark mode
    </button>
      

    }
    </nav>
    <h1>hello world!!</h1>
    <div className="gallery">
      <div className="img">
        <img src="https://www.gong.io/wp-content/uploads/2018/09/GAP-Selling.png" alt="" />
      </div>
      <div className="img">
        <img src="https://www.gong.io/wp-content/uploads/2018/09/GAP-Selling.png" alt="" />
      </div>
      <div className="img">
        <img src="https://www.gong.io/wp-content/uploads/2018/09/GAP-Selling.png" alt="" />
      </div>

    </div>


    </>
  )
}

export default App
