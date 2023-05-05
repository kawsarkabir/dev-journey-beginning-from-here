const loadMeal= (search)=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then(res => res.json())
    .then(data => displayMeal(data.meals))
}

const displayMeal = meals =>{
    const mealConteiner = document.getElementById('meal-container');
    mealConteiner.innerHTML = ''
    meals.forEach(meal =>{
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('meal-items')
        mealDiv.innerHTML = `
        <img src="${meal.strMealThumb}">
        <h5>Meal name: ${meal.strMeal}</h5>
        <h6>idMeal: ${meal.idMeal}</h6>
        <h6>Area: ${meal.strArea}</h6>

        `
        mealConteiner.appendChild(mealDiv)
    })
}
const searchFood = () =>{
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;
    loadMeal(searchValue)
    searchField.value = ''
}


// loadMeal('');