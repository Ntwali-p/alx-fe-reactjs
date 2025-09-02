import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === recipeId));

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h1 style={{ marginTop: 0 }}>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <h2>Edit</h2>
      <EditRecipeForm recipeId={recipeId} />

      <div style={{ marginTop: 12 }}>
        <DeleteRecipeButton recipeId={recipeId} />
      </div>
    </div>
  );
};

export default RecipeDetails;
