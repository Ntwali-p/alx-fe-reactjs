import FavoritesList from './FavoritesList';
import RecommendationsList from './RecommendationsList';
import { useRecipeStore } from './recipeStore';

function App() {
  const recipes = useRecipeStore(state => state.recipes);
  const addFavorite = useRecipeStore(state => state.addFavorite);

  return (
    <div>
      <h1>Recipe Sharing App</h1>

      <div>
        <h2>All Recipes</h2>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <button onClick={() => addFavorite(recipe.id)}>Add to Favorites</button>
          </div>
        ))}
      </div>

      <FavoritesList />
      <RecommendationsList />
    </div>
  );
}

export default App;
