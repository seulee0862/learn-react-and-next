import './Body.css'
import Button from './Button'

function ButtonChild() {
    return <div>BUTTON CHILD</div>
}

export default function Body() {

    const buttonProps = {
        text: "1번 버튼",
        color: "red",
        a: 1,
        b: 2,
        c: 3
    }

    return (
        <div className='body'>
            <h1>BODY</h1>
            <Button {...buttonProps}><ButtonChild/></Button>
            <Button text={"2번 버튼"} color={"blue"}/>
            <Button text={"3번 버튼"} color={"green"}/>
        </div>
    )
}