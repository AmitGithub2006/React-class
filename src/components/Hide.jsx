import { useState } from "react";

function Hide() {
    const [show, setShow] = useState(true);
  return (
    <div>
        {
            show ? <h1>Hello, I am visible</h1> : null
        }
        {/* <button onClick={() => setShow(false)}>Hide</button>
        <button onClick={() => setShow(true)}>Show</button> */}

        <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  )
}

export default Hide;