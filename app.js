fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
.then(res => res.json())
.then(data => displayFoods(data))


const displayFoods = foods =>{
    for (let i = 0; i < foods.length; i++) {
        const food = foods[i];
        console.log(food.name);
        
    }
}