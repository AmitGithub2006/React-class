function ReuseComponent(props) {
  return (
    <>
      <div>
        <h1>My name is {props.data.name}</h1>
        <h1>My name is {props.data.city}</h1>
        <h1>My name is {props.data.contact}</h1>
      </div>
    </>
  );
}

export default ReuseComponent;