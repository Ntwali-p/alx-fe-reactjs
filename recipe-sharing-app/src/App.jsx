import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import EditRecipeForm from './components/EditRecipeForm';

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/edit/:id" element={<EditRecipeFormWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

// Wrappers to extract ID from URL and pass as prop
import { useParams } from 'react-router-dom';

const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={id} />;
};

const EditRecipeFormWrapper = () => {
  const { id } = useParams();
  return <EditRecipeForm recipeId={id} />;
};

export default App;
