import Recipe from "../Recipe/Recipe";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [handelRecipes, setHandelRecipes] = useState([]);
    const [handelPreparing, setHandelPreparing] = useState([]);

    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);

    // Handle Want to Cook
    const handelWantToCook = recipe => {
        const isRecipeAlreadyAdded = handelRecipes.some(r => r.recipe_name === recipe.recipe_name);

        if (isRecipeAlreadyAdded) {
            toast("This recipe is already in your Want to Cook list.");
        } else {
            setHandelRecipes([...handelRecipes, recipe]);
        }
    };

    // Handle Preparing Button
    const handelPreparingBtn = info => {
        const updatedHandelRecipes = handelRecipes.filter(
            recipe => recipe.recipe_name !== info.recipe_name
        );
        setHandelRecipes(updatedHandelRecipes);
        setHandelPreparing([...handelPreparing, info]);
    };

    // Calculate Total Time and Calories
    const totalTime = handelPreparing.reduce((acc, item) => acc + parseInt(item.recipe_time), 0);
    const totalCalories = handelPreparing.reduce((acc, item) => acc + parseInt(item.recipe_calories), 0);

    return (
        <div className="">
            <h3 className="text-5xl font-bold text-center">Our Recipes</h3>
            <p className="mt-5 mb-6 text-xl text-center md:w-3/4 mx-auto">
                Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus.
                Eget urna volutpat curabitur elementum mauris aenean neque.
            </p>

            <div className="md:flex gap-10 mt-6">
                <div className="md:flex gap-4">
                    {
                        recipes.map((recipe, idx) =>
                            <Recipe
                                key={idx}
                                recipe={recipe}
                                handelWantToCook={handelWantToCook}
                            />
                        )
                    }
                </div>
                <div className="border md:p-7 rounded-2xl">
                    <h3 className="border-b-2 pb-3 text-3xl font-bold text-center">
                        Want To Cook: {handelRecipes.length}
                    </h3>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr className="text-xl">
                                        <th></th>
                                        <th className="px-2 py-2">Name</th>
                                        <th className="px-2 py-2">Time</th>
                                        <th className="px-2 py-2">Calories</th>
                                        <th className="px-2 py-2">Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        handelRecipes.length > 0 ? (
                                            handelRecipes.map((info, idx) => (
                                                <tr key={idx} className="text-lg font-semibold">
                                                    <td>{idx + 1}</td>
                                                    <td className="text-2xl text-bold">{info.recipe_name}</td>
                                                    <td>{info.recipe_time}</td>
                                                    <td>{info.recipe_calories}</td>
                                                    <td>
                                                        <button
                                                            onClick={() => handelPreparingBtn(info)}
                                                            className="btn btn-accent">
                                                            Preparing
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="5" className="text-center text-xl">
                                                    No recipes added yet
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-6">
                            <h3 className="border-b-2 pb-3 text-3xl font-bold text-center">
                                Currently Cooking: {handelPreparing.length}
                            </h3>
                            <table className="table">
                                <thead>
                                    <tr className="text-xl">
                                        <th></th>
                                        <th className="px-2 py-2">Name</th>
                                        <th className="px-2 py-2">Time</th>
                                        <th className="px-2 py-2">Calories</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        handelPreparing.length > 0 ? (
                                            handelPreparing.map((info, idx) => (
                                                <tr key={idx} className="text-lg font-semibold">
                                                    <td>{idx + 1}</td>
                                                    <td className="text-2xl text-bold">{info.recipe_name}</td>
                                                    <td>{info.recipe_time}</td>
                                                    <td>{info.recipe_calories}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="4" className="text-center text-xl">
                                                    No recipes added yet
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>

                            <div className="border-t-2 pt-4 mt-8">
                                <h3 className="text-xl">Total Time = {totalTime} mins</h3>
                                <h3 className="text-xl">Total Calories = {totalCalories} kcal</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Recipes;
