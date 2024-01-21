import "./Button.css"

export default function Button({color, text, children}) {

    const onClick = () => {
        alert("버튼 클릭");
    }

    return (
        <button
            onClick={onClick} style={{
            backgroundColor: color
        }}
        className="button">{children}</button>
    );
}