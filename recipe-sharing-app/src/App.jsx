import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
      <div style={{ width: '600px', margin: 'auto' }}>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
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
