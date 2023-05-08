const persons = {
    found:2,
    message:"Found 2 persons",
    result:[
      {
          name: {
              common: "John",
              fullName: ["John", "Doe"]
            },
            age: 32,
            isMale: false,
            address: {
              street: "13/A St Joseph",
              house: 10,
            },
      },
      {
          name: {
              common: "Humayoun",
              fullName: ["Humayoun", "Kabir"]
            },
            age: 33,
            isMale: false,
            address: {
              street: "13/A St Lucia",
              house: 11,
            },
      },
    ]
};


const {found, message, result} = persons;
result.forEach(singlePerson=>{
    const cardContainer = document.getElementById('card-container');
    const singleCard = document.createElement('div');
    singleCard.classList.add('col');
    singleCard.innerHTML = `
    <div class="card shadow-lg">
    <div class="card-body">
      <h5 class="card-title">${singlePerson.name.common}</h5>
      <p class="card-text">${singlePerson.age}</p>
      <p class="card-text">${singlePerson.isMale ? 'Male': 'Female'}</p>
      <p class="card-text">${singlePerson.address.street}, ${singlePerson.address.house}</p>
    </div>
  </div>
    `
    cardContainer.appendChild(singleCard);
})