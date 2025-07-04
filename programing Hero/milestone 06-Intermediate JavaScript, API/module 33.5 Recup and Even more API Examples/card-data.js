/* const person = {
    name:{
        common: 'John',
        fullName:['Jhon', 'Doe']
    },
    age: 18,
    isMale: true,
    address:{
        street:'13/A St Joseph',
        house:10
    }
}
console.log(person);
const stringiFiedJson = JSON.stringify(person);
console.log(stringiFiedJson);

// parse 
const parseJson = JSON.parse(stringiFiedJson);
console.log(parseJson);



const {name, age, isMale, address} = parseJson;
const {common, fullName} = name;

const personContainer = document.getElementById('person-container');
personContainer.innerHTML = `
<h2>Common Name: ${common}</h2>
<h3>Full Name: ${fullName.join(' ')}</h3>
<p>Age: ${age}</p>
<p>isMale: ${isMale === true ? 'Male' : 'Female'}</p>
`
 */
const data = [
  {
    _id: "60795d4e0489a32f948c4167",
    name: "Honda Sedan",
    price: "$ 132",
    description:
      "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Automatic",
    imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
  },
  {
    _id: "60795e440489a32f948c4168",
    name: "MitoSedan",
    price: "$ 221",
    description:
      "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Manual",
    imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
  },
  {
    _id: "60795fc20489a32f948c4169",
    name: "Isuzu Tacoma",
    price: "$ 105",
    description:
      "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags, Transmission: Manual",
    imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
  },
  {
    _id: "6079615d0489a32f948c416a",
    name: "Chevrolet Crossover",
    price: "$ 434",
    description:
      "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags, Transmission: Automatic",
  },
];

//   Not Found image
//   https://i.ibb.co/g9CSkZQ/image.png

data.forEach((car) => {
  const { name, price, imageURL, description } = car;
  const cardContainer = document.getElementById("card-container");
  const singleCard = document.createElement("div");
  singleCard.classList.add("col");
  singleCard.innerHTML = `
    <div class="card">
    <img src="${imageURL ? imageURL:"https://i.ibb.co/g9CSkZQ/image.png"}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${description}</p>
      <button class="btn btn-primary">${price}</button>
    </div>
  </div>
    `;
  cardContainer.appendChild(singleCard);
});
