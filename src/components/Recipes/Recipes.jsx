import { useState } from "react";
import { useEffect } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);

    return (
        <div className="space-y-4">
            <h3 className="text-5xl font-bold text-center">Our Recipes</h3>
            <p className="text-xl text-center">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            <div className="md:flex gap-4">
                {
                    recipes.map((recipe, idx) => <Recipe key={idx} recipe={recipe}></Recipe>)
                }
            </div>
        </div>
    );
};

export default Recipes;