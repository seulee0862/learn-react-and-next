import './Body.css'
import { useRef, useState } from 'react'

export default function Body() {

    const [state, setState] = useState({
        name: "",
        gender: "",
        bio: ""
    })

    const nameRef = useRef()

    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value,
        })
    }
    
    const onSubmit = () => {
        if (state.name === "") {
            nameRef.current.focus();
            return;
        }
        console.log(state);
        alert("가입축하~");
    }

    return (
        <div className='body'>
            <div>
                <input ref={nameRef} name={"name"} value={state.name} onChange={onChange} />
            </div>
            <div>
                <select name={"gender"} value={state.gender} onChange={onChange}>
                    <option value="">밝히지 않음</option>
                    <option value="feamale">여성</option>
                    <option value="male">남성</option>
                </select>
            </div>
            <div>
                <textarea name={"bio"} value={state.bio} onChange={onChange}/>
            </div>
            <div>
                <button onClick={onSubmit}>회원가입</button>
            </div>
        </div>
    )
}