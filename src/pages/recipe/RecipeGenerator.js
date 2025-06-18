import react, { useState } from "react";
import api from "../../services/api";

function RecipeGenerator(){

    const [ingredients, setIngredients] = useState('');
    const [cuisine, setCuisine] = useState('Any');
    const [dietaryRestrictions, setDietaryRestrictions] = useState('');
    const [recipe, setRecipe] = useState('')

    const createRecipe = async () => {
        try {
            const response = await  api.get(`recipe-creator`, {
                params: {
                    ingredients, 
                    cuisine, 
                    dietaryRestrictions
                }
            })
            const data = await response.data;
            console.log(data);
            setRecipe(data);
        } catch (error) {
            console.log('Error generate recipe: ', error)
        }
    };

    return (
        <div>
            <h2>Generate Recipes</h2>
            <input
                type="text"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="Enter a ingredients (comma separated)"
            />

            <input
                type="text"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                placeholder="Enter cuisine type"
            />

            <input
                type="text"
                value={dietaryRestrictions}
                onChange={(e) => setDietaryRestrictions(e.target.value)}
                placeholder="Enter dietary restrictions"
            />

            <button onClick={createRecipe}>
                Ask AI
            </button>
            <div className="output">
                <p>{recipe}</p>
            </div>
        </div>    
    );
}

export default RecipeGenerator;