import { useState } from "react";
import "./styles/styles.css";
import ErrorSection from "./components/common/ErrorSection";
import IngredientSection from "./components/common/IngredientSection";
import InputContainer from "./components/common/InputContainer";
import RecipeSection from "./components/common/RecipeSection";
import ResultHeader from "./components/common/ResultHeader";

function App() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState('');
  

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const hideSections = () => {
    document.getElementById('input-container').style.display = "none";
    document.getElementById('error-section').style.display = "none";
    document.getElementById('result-header').style.display = "none";
    document.getElementById('ingredients-section').style.display = "none";
    document.getElementById('recipe-section').style.display = "none";
  };

  const showInput = () => {
    hideSections();
    document.getElementById('input-container').style.display = "block";
  };

  const showRecipe = () => {
    hideSections();
    document.getElementById('result-header').style.display = "block"
    document.getElementById('recipe-section').style.display = "block";
  };

  const showIngredient = () => {
    hideSections();
    document.getElementById('result-header').style.display = "block"
    document.getElementById('ingredients-section').style.display = "block";
  };

  const searchDish = () => {
    const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

    if (!inputValue) {
      setError("The input must not be empty");
      hideSections();
      document.getElementById('input-container').style.display = "block";
      document.getElementById('error-section').style.display = "block";
    } else {
      fetch(`${apiUrl}${inputValue}`)
        .then(res => res.json())
        .then(apiData => {
          if (apiData["meals"] && apiData["meals"][0]) {
            const mealData = apiData["meals"][0];
            setData(mealData);
            const extractIngredients = (data) => {
              const ingredientList = [];
              for (let i = 1; i <= 20; i++) {
                const ingredient = data[`strIngredient${i}`];
                const measure = data[`strMeasure${i}`];
                if (ingredient && measure) {
                  ingredientList.push(`${measure} ${ingredient}`);
                } else if (ingredient) {
                  ingredientList.push(ingredient);
                }
              }
              setIngredients(ingredientList);
            };
            extractIngredients(mealData);

            hideSections();
            document.getElementById('result-header').style.display = "block";
            document.getElementById('ingredients-section').style.display = "block";
          } else {
            setError("No meals found for the given input");
            hideSections();
            document.getElementById('error-section').style.display = "block";
          }
        })
        .catch(err => {
          setError("An error occurred while fetching the data");
          hideSections();
          document.getElementById('error-section').style.display = "block";
        });
    }
  };

  return (
    <div className="body py-5">
      <div className="background">
      <span className="dot">.</span>
      </div>
      <div className="card shadow" id="app-container">
        <div className="card-header text-center">
          <h1>Reciper</h1>
        </div>
        <div className="card-body">
          <InputContainer inputValue={inputValue} handleInputChange={handleInputChange} searchDish={searchDish} />
          <div className="search-result">
            <ErrorSection errorMessage={error} newSearch={showInput} />
            <ResultHeader dishName={data.strMeal} dishArea={data.strArea} dishImage={data.strMealThumb} />
            <IngredientSection newSearch={showInput} onRecipe={showRecipe} ingredients={ingredients} />
            <RecipeSection newSearch={showInput} onIngredient={showIngredient} instructions={data.strInstructions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
