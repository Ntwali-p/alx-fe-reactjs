import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes);

  if (!recipes.length) return <p>No recipes yet!</p>;

  return (
    <div>
      {recipes.map((r) => (
        <div key={r.id} style={{ border: '1px solid #ddd', padding: 12, marginBottom: 10 }}>
          <h3 style={{ margin: 0 }}>{r.title}</h3>
          <p style={{ margin: '6px 0' }}>{r.description}</p>
          <Link to={`/recipes/${r.id}`}>View details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
