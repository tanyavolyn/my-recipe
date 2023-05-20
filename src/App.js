import { useState, useEffect } from "react";
import MyRecipesComponent from './MyRecipesComponent';
import video from './food.mp4';
import './App.css';

function App() {

  const MY_ID = "137cd06b";
  const MY_KEY = "dd0945e54b50dcbf8e086eab7fb38fbc";

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('avocado');

useEffect(()=> {
  const functionRecipes = async () => {
const response = await fetch (`https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_0123456789abcdef0123456789abcdef&app_id=${MY_ID}&app_key=${MY_KEY}`);
const data = await response.json();
console.log(data);
setMyRecipes(data);
  }
  functionRecipes()},[wordSubmitted] ) 

/*   const functionResponse = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setMyRecipes(data.hits);
    }
     
      useEffect(()=> {
      functionResponse()
    }, [wordSubmitted] ) */

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch)
  }

  return (
    <div className="App">

      <div className="container">
<video autoPlay muted loop>
  <source src={video} type="video/mp4"/>
</video>
<h1>Find a Recipe</h1>
      </div>

      <div className="container">
<form onSubmit={finalSearch}>
  <input className="search" placeholder="Search..." onChange={myRecipeSearch} value={mySearch} ></input>
</form>
      </div>

      <div className="container">
<button><img src="https://cdn.icon-icons.com/icons2/2066/PNG/512/search_icon_125165.png" alt="Bild" className="icons"/></button>
      </div>

<div>
  {myRecipes.map(element => (
    <MyRecipesComponent
    label={element.recipe.label}
    image={element.recipe.image}
    calories={element.recipe.calories}
    ingredients={element.recipe.ingredientLines}
    />
  )

  )
  }
</div>
    
    
    </div>
  );
}

export default App;
