import type { Recipe } from '../types';
import { useAuth } from '../contexts/AuthContext';
import RecipeList from '../components/RecipeList/RecipeList';

type Props = {
  recipes: Recipe[];
  onToggleFavorite: (id: string) => void
};

function FavoritesPage({ recipes, onToggleFavorite }: Props) {
  const { currentUser } = useAuth();
  const likedRecipes = currentUser
    ? recipes.filter((r) => r.likes.includes(currentUser._id))
    : [];

  return (
    <div className="app__container">
      <h1 className="app__heading">Favoritos</h1>
      {likedRecipes.length === 0 ? (
        <p>Aún no tienes recetas en favoritos</p>
      ) : (
        <RecipeList recipes={likedRecipes} onToggleFavorite={onToggleFavorite} />
      )}
    </div>
  );
}

export default FavoritesPage;
