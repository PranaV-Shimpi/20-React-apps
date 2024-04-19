import { useContext } from "react";
import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../context";

export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Favorites</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center ">
        {favoritesList && favoritesList.length > 0 ? (
          favoritesList.map((item) => (
            <RecipeItem key={item.id} item={item} />
          ))
        ) : (
          <div className="text-center">
            <p className="text-xl font-semibold">
              Nothing is added in favorites.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}