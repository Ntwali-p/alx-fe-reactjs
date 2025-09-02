import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Existing actions
  addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),
  deleteRecipe: (id) => set((state) => ({ recipes: state.recipes.filter((recipe) => recipe.id !== id) })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // New actions for search & filter
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));
