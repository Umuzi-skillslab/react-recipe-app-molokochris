import RecipeCard from "./RecipeCard";
import styles from "./Recipe.module.css";

export default function RecipeList({ recipes = [] }) {
  return (
    <div className={styles.grid}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
