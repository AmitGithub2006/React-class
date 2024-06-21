import React, {useState, useEffect} from 'react';
import UseEffect2 from './UseEffect2';

function UseEffect() {
    const [count, setCount] = useState(0);
    const [marks, setMarks] = useState(10);

    return (
        <div>
            <h1>UseEffect</h1>
            <UseEffect2 count={count} marks={marks} />
            <button onClick={() => setCount(count + 1)}>Inc Count</button>
            <button onClick={() => setMarks(marks + 1)}>Inc Marks</button>
        </div>
    )
}

export default UseEffect;