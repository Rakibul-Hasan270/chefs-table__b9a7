import { useState } from "react";
import { useEffect } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [handelRecipes, setHandelRecipes] = useState([]);

    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);

    const handelWantToCook = recipe => {
        setHandelRecipes([...handelRecipes, recipe]);
    }
    console.log(handelRecipes)
    return (
        <div className="">
            <h3 className="text-5xl font-bold text-center">Our Recipes</h3>
            <p className="mt-5 mb-6 text-xl text-center md:w-3/4 mx-auto">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>

            <div className="md:flex gap-10 mt-6">
                <div className="md:flex gap-4">
                    {
                        recipes.map((recipe, idx) => <Recipe key={idx} recipe={recipe} handelWantToCook={handelWantToCook}></Recipe>)
                    }
                </div>
                <div className="border md:p-7 rounded-2xl">
                    <h3 className="border-b-2 pb-3 text-3xl font-bold text-center">Want To Cook: {handelRecipes.length}</h3>
                    <div>

                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead className="text-xl">
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </thead>
                                {/* Table Body */}
                                <tbody>
                                    {
                                        handelRecipes.length > 0 ? (
                                            handelRecipes.map((info, idx) => (
                                                <tr key={idx}>
                                                    <td>{idx}</td>
                                                    <td>{info.recipe_name}</td>  {/* Recipe Name */}
                                                    <td>{info.recipe_time}</td>        {/* Cooking Time */}
                                                    <td>{info.recipe_calories}</td>    {/* Calories */}
                                                    <td>
                                                        <button className="btn btn-accent">Preparing</button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="4" className="text-center">No recipes added yet</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;