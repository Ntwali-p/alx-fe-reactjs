import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // go back to list after deletion
  };

  return (
    <button onClick={handleDelete} style={{ background: '#e33', color: '#fff', padding: '6px 10px' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
