import { useState, useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipeId }) => {
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === recipeId));
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);

  const [title, setTitle] = useState(recipe?.title ?? '');
  const [description, setDescription] = useState(recipe?.description ?? '');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  if (!recipe) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipeId, {
      title: title.trim(),
      description: description.trim(),
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8 }}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={3}
        required
      />
      <button type="submit">Save changes</button>
    </form>
  );
};

export default EditRecipeForm;
