// import React from 'react';

// Functional component

// export default function User() {
//     return (
//         <>
//       <h1>
//         User Component <span> This is my span</span>
//       </h1>
//       <h2>This is my second element</h2>
//         </>
//     );

// without JSX
// return (
//   React.createElement('div', null, React.createElement('h1', null, 'User Component', React.createElement("span", null, "This is my span")), React.createElement('h2', null, 'This is my second element'))
// );
// Here, null means no props are passed to the element
// }

// Class component

import React, { Component } from "react";

export default class User extends Component {
  render() {
    return (
      <>
        <h1>User Component</h1>
      </>
    );
  }
}
