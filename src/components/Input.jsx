import {useState} from "react";

function Input() {

    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);

    function getValue(event) {
        console.log(event.target.value);
        setData(event.target.value);
        setPrint(false);
    }

    return (
        <>
        <h1>Accessing Input Value</h1>
        {
            print ? <h2>{data}</h2> : null
        }
        <input type="text" onChange={getValue} />
        <button onClick={() => setPrint(true)}>Print</button>
        </>
    );
}

export default Input;