import React from "react";

const users = [
  {
    fullName: "kawsar kabir",
    age:32,
    phone:[
        {home:'01882384003'},
        {office: '0833470'}
    ]
  },
  {
    fullName: "kabir ahmed",
    age:18,
    phone:[
        {home:'0132384003'},
        {office: '000833470'}
    ]
  }
];

const App = () => {
  return (
    <div>
      <h1>Nested Lists</h1>
      {
        users.map((user, index) =>(
            <article key={index}>
                <h3>{user.fullName}</h3>
                <p>{user.age}</p>
                {
                    user.phone.map((phoneI, index) =>(
                        <div key={index}>
                            <p>Home: {phoneI.home}</p>
                            <p>Office{phoneI.office}</p>
                        </div>
                    ))
                }
            </article>
        ))
      }
    </div>
  );
};

export default App;
