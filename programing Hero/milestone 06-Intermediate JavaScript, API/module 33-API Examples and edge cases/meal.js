const loadMeal= ()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    .then(res => res.json())
    .then(data => displayMeal(data.meals))
}
loadMeal();
const displayMeal = meals =>{
    const mealConteiner = document.getElementById('meal-container')
    meals.forEach(meal =>{
        console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('meal-items')
        mealDiv.innerHTML = `
        <img src="${meal.strMealThumb}">
        <h2>Meal name: ${meal.strMeal}</h2>
        <h3>idMeal: ${meal.idMeal}</h3>
        <h4>Area: ${meal.strArea}</h4>

        `
        mealConteiner.appendChild(mealDiv)
    })
}