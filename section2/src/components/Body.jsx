import './Body.css'
import { useState } from 'react'

export default function Body() {

    const [light, setLight] = useState("OFF");
    console.log(light);

    return (
        <div className='body'>
            {light}
            <button onClick={() => {
                setLight("ON");
            }}>
                켜기
            </button>
            <button onClick={() => {
                setLight("OFF");
            }}>
                끄기
            </button>
        </div>
    )
}