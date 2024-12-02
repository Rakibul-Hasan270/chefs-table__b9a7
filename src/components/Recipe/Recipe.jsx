import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";

const Recipe = ({ recipe, handelWantToCook }) => {
    const { recipe_name, recipe_description, recipe_time, ingredients, recipe_calories, recipe_img } = recipe;

    return (
        <div>
            <div className="card card-compact  md:w-96 shadow-xl border-2">
                <figure className='p-3'>
                    <img className='rounded-xl'
                        src={recipe_img}
                        alt="Shoes" />
                </figure>
                <div className="card-body p-3">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className='border-b-2 pb-3'>{recipe_description}</p>

                    <div className='border-b-2 pb-4'>
                        <h3 className='text-xl'>Ingredient: {ingredients.length}</h3>
                        <div className="ml-6">
                            {ingredients.map((info, idx) => <li key={idx}>{info.name}</li>)}
                        </div>
                    </div>

                    <div className='flex gap-8 mb-4'>
                        <div className="flex items-center gap-1">
                            <span><CiClock2 /></span>
                            <span> {recipe_time} min</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span><FaFire /> </span>
                            <span> {recipe_calories} kcal</span>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => handelWantToCook(recipe)} className="btn btn-accent text-xl">Want To Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;