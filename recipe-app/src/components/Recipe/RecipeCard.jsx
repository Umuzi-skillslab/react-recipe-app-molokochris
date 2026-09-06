import { Clock, Heart, Signal } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./Recipe.module.css";

export default function RecipeCard({ recipe, favorite = false }) {
  return (
    <Link to={`/recipes/${recipe.id}`} className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={recipe.image} alt={recipe.title} />
        <span className={`${styles.heart} ${favorite ? styles.filled : ""}`}>
          <Heart size={16} fill={favorite ? "currentColor" : "none"} />
        </span>
      </div>
      <div className={styles.body}>
        <div className={styles.tags}>
          {(recipe.tags || []).map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <h3 className={styles.title}>{recipe.title}</h3>
        <div className={styles.meta}>
          <span>
            <Clock size={14} /> {recipe.cookTime}
          </span>
          <span>
            <Signal size={14} /> {recipe.difficulty}
          </span>
        </div>
      </div>
    </Link>
  );
}
