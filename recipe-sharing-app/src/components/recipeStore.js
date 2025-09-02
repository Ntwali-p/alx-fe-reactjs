import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: 'Pancakes', description: 'Fluffy pancakes with syrup.' },
    { id: 2, title: 'Spaghetti', description: 'Tomato sauce with basil.' },
  ],

  // Add
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Update
  updateRecipe: (id, updates) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updates } : r
      ),
    })),

  // Delete
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),

  // (kept from Task 0)
  setRecipes: (recipes) => set({ recipes }),
}));
