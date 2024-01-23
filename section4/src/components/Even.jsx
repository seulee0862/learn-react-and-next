import { useEffect } from "react";

export default function Even() {

    //useEffect의 재호출 또는 Component언마운트시 콜백함수가 실행된다.
    useEffect(() => {
        return () => {
            console.log("언마운트")
        }
    }, []); //콜백함수의 재호출기능을 없애기 위해 [] 사용

    return <div>짝수입니다</div>;
}