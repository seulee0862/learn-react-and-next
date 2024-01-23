import { useState } from "react";
import "./TodoEditor.css";
import { useRef } from "react";

export default function TodoEditor({ onCreate }) {
    
    const [content, setContent] = useState("");
    const inputRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onClick = () => {
        if (content === "") {
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    }

    const onKeyDown = (e) => {
        if (e.keyCode === 13) { // 13 = enter
            onClick();
        }
    }

    return (
        <div className="TodoEditor">
            <input
                ref={inputRef}
                value={content}
                onChange={onChangeContent}
                onKeyDown={}
                placeholder="새로운 Todo ..." />
            <button onClick={onClick}>추가</button>
        </div>
    )
}