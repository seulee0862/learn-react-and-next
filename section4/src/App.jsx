import { useState, useEffect } from 'react'
import './App.css'
import Viewer from "./components/Viewer"
import Controller from './components/Controller'
import { useRef } from 'react';
import Even from './components/Even';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const isMountRef = useRef(false)

  useEffect(() => {
    if (!isMountRef.current) {
      isMountRef.current = true;
      return;
    }
    //control
  });

  useEffect(() => {
    console.log(`카운트 : ${count}, 텍스트 : ${text}`)
  }, [count, text])

  const onClickButton = (value) => {
    setCount(count + value);
  }

  const onChangeText = (e) => {
    setText(e.target.value);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={onChangeText} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 == 0 && <Even />}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App