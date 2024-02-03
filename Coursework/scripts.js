async function RandomMeal(){
    const response = ("https://www.themealdb.com/api/json/v1/1/random.php");
    if (!response.ok){
        console.log(response.json());
        throw new Error("API call temporarily unavailable");
        
    }
    else{
        const data = await response.json();
        document.getElementById("mealDesc").value = `${data.strInstructions}`;
    }
}
document.getElementById("generateMeal").addEventListener("click",RandomMeal)