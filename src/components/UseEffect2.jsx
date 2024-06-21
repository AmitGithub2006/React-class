import { useEffect } from "react";

function UseEffect2(props) {
    useEffect(() => {
        console.log("UseEffect2 - useEffect");
    },[])

    useEffect(() => {
        console.log("UseEffect2 - useEffect - count");
    },[props.count])
    
    return (
        <div>
            <h1>Count : {props.count}</h1>
            <h1>Marks : {props.marks}</h1>
        </div>
    )
}

export default UseEffect2;