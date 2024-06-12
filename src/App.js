import "./App.css";
import User from "./components/User";
import { useState } from "react";

function App() {
  const [name, setName] = useState("John");
  // const [num, setNum] = useState(0);

  function InnerFunc() {
    // name = "Peter";
    // console.log("My name is", name);

    setName("Peter");
    // setNum(num + 1);

    //  return (
    // <div>This is function inside App.jsx</div>
    //   console.log("This is function inside App.jsx")
    //  )
  }

  return (
    <>
      <User />

      {/* <button onClick={InnerFunc()}>Click</button> This will call the function immediately so not recommended
      <button onClick={console.log("Hello App.jsx")}>Click</button> This will call the function immediately so not recommended */}

      <h1>{name}</h1>
      {/* <h2>{num}</h2> */}
      <button onClick={() => InnerFunc()}>Click</button>
      {/* <button onClick={() => console.log("Hello App.jsx")}>Click</button> */}
      {/* {InnerFunc()} */}
      {/* <InnerFunc /> */}

      {/* <div>
        <h1>This is my heading
        </h1>
        <p>This is my paragraph</p>
      </div> */}
    </>
  );
}

export default App;
