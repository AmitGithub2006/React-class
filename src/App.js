// import React, { Component } from "react";

import { useState } from "react";
import "./App.css";
import User from "./components/User";
import Student from "./components/Student";
import Input from "./components/Input";
import Hide from "./components/Hide";

import Form from "./components/Form";

function App() {
  // const [name, setName] = useState("John");
  const [name, setName] = useState("Sangeeta");

  // function innerFunc() {
  //   console.log("Hello App.jsx");
  //   setName("Smith");
  // }

  return (
    <>
      {/* <User /> */}

      {/* <button onClick={InnerFunc()}>Click</button> This will call the function immediately so not recommended
      <button onClick={console.log("Hello App.jsx")}>Click</button> This will call the function immediately so not recommended */}
      {/* <button onClick={innerFunc}>Click</button> */}
      {/* <h1>My name is {name}</h1>
<button onClick={() => innerFunc()}>Click</button> */}

      {/* <button onClick={() => console.log("Hiiiiiiii")}>Click</button> */}

      {/* <Student
        name="Amit"
        city={"Delhi"}
        details={{ address: "Street 123", mobile: "98765" }}
      /> */}
      {/* <Student name={"Punam"} city={"Pune"} />
      <Student name={"Mahima"} city={"Maharashtra"} /> */}

      {/* <button onClick={() => setName("Punam")}>Update Name</button> */}

      {/* <Student name="Mahima" city="Bangalore"/>
    <Student name="Tahira" city="Amravati"/> */}

      {/* <Input /> */}

      {/* <Hide /> */}

      <Form />
    </>
  );
}

export default App;

// Class Component

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       fname: "John",
//     };
//   }

//   updateName() {
//     this.setState({
//       fname: "Smith"
//     })
//   }
//   render() {
//     return (
//       <>
//         <h1>My name is {this.state.fname}</h1>
//         <button onClick={() => this.updateName()}>Click</button>
//       </>
//     );
//   }
// }

// export default App;
