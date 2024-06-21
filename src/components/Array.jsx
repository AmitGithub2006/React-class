function Array() {
  // const students = ['Mahima', 'Tahira', 'Sangeeta', 'Komal'];

  const students = [
    {
      name: "Mahima",
      city: "Bangalore",
      //   address: {
      //     street: "Street 123",
      //     city: "Bangalore",
      //     state: "Karnataka",
      //   },
      contact: 111,
    },
    {
      name: "Tahira",
      city: "Amravati",
      contact: 222,
    },
    {
      name: "Sangeeta",
      city: "Nagpur",
      contact: 333,
    },
    {
      name: "Komal",
      city: "Pune",
      contact: 444,
    },
  ];

  // students.map((student) => {
  //     console.log(student);
  // })

  // for(let i = 0; i < students.length; i++) {
  //     console.log(students[i]);
  // }

  return (
    <div>
      {students.map((student, index) => {
        return <h2 key={index}>{student.name} {student.city} {student.contact}</h2>;
      })}

      {/* It will give error because for loop is not allowed in JSX because it is not a valid JSX expression. */}
      {/* {
            for(let i = 0; i < students.length; i++) {
                console.log(students[i]);
            }
        } */}
    </div>
  );
}

export default Array;
