import { useState } from "react";

function Form() {

    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [agree, setAgree] = useState(false);

    function formData(e) {
        e.preventDefault();
        // console.log(name, city, agree);
        console.log(e.target[0].value);
    }
    return (
      <div style={{textAlign: "center"}}>
        <h1>Form Component</h1>
        <form onSubmit={formData}>
          <input type="text" placeholder="Enter your name..." onChange={(e) => setName(e.target.value)} /> <br />
          {/* <br />
          <select onChange={(e) => setCity(e.target.value)}>
            <option>Mumbai</option>
            <option>Pune</option>
            <option>Delhi</option>
            <option>Bangalore</option>
          </select>
          <br />
          <br />
          <input type="checkbox" onChange={(e) => setAgree(e.target.checked)} />
          <span>I agree</span>
          <br />
          <br /> */}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default Form;