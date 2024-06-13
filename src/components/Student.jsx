import React from "react";

// function Student(props) {
//     console.log(props);
//     return (
//       <div
//         style={{
//           backgroundColor: "yellow",
//           margin: "10px",
//           textAlign: "center",
//         }}
//       >
//         <h1>Hello, I am {props.name}</h1>
//         <h2>I am from {props.city}</h2>
//         {/* <h3>My current location is {props.details.address}</h3> */}
//       </div>
//     );
// }

// export default Student;



// Class Component


class Student extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div style={{
          backgroundColor: "yellow",
          margin: "10px",
          textAlign: "center",
        }}>
                <h1>I am {this.props.name}</h1>
                <h2>I am from {this.props.city}</h2>
            </div>
        )
    }
}

export default Student;