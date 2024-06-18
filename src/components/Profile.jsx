import React, { useState } from "react";

function Profile() {
  const [loggedIn, setLoggedIn] = useState(2);

  // if(loggedIn) {
  //     return <div>Welcome to your profile</div>
  // } else {
  //     return <div>Please login to view your profile</div>
  // }

  return (
    <>
      {loggedIn === 0 ? (
        <h1>Welcome User 0</h1>
      ) : loggedIn === 1 ? (
        <h1>Welcome User 1</h1>
      ) : (
        <h1>User not found</h1>
      )}
    </>
  );
}

export default Profile;
